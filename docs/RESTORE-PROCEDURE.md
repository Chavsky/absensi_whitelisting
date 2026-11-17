# Prosedur Pemulihan Database `attendance_db` (PostgreSQL)

> **Status dokumen:** disusun pada Tahap 2C (10 November 2026) dari backup final
> `attendance_db_final_20261110_144844.dump`. Prosedur ini **belum pernah diuji
> dengan restore aktual** — verifikasi restore aktual membutuhkan database tujuan
> yang disiapkan dan disetujui pemilik.

## 0. Peringatan Penting

- ⚠️ **`--clean` berbahaya**: opsi ini menjalankan `DROP` pada setiap objek di
  database tujuan sebelum membuat ulang. Salah target = data hilang permanen.
  Gunakan **hanya** jika Anda sudah 100% yakin dengan nama database tujuan
  **dan** memiliki backup valid yang baru diambil.
- Perintah di dokumen ini adalah **dokumentasi**, bukan sesi eksekusi.
  Jangan jalankan tanpa persetujuan pemilik data.
- Seluruh perintah memakai binary PostgreSQL 18 (`C:\Program Files\PostgreSQL\18\bin\`).
  Pastikan versi `pg_restore` ≥ versi server yang membuat arsip.

## 1. Persiapan PostgreSQL dan Role

1. Pastikan layanan PostgreSQL 18 berjalan:
   `Get-Service postgresql-x64-18`
2. Tentukan role yang akan dipakai restore (butuh hak `CREATEDB` atau superuser;
   di meski development saat ini role `postgres` adalah superuser).
3. Siapkan password role melalui environment variable — **jangan** pernah menaruh
   password di baris perintah:
   ```powershell
   # Password dimasukkan interaktif / via variabel sesi — tidak ditulis di dokumen ini.
   $env:PGPASSWORD = Read-Host "Password role PostgreSQL" -AsSecureString
   # (Konversi ke plain text hanya jika tooling menuntut; jangan catat di mana pun.)
   ```

## 2. Memastikan Target Database Benar

1. Lihat daftar database dan konfirmasi nama target **sudah ada** dan **memang
   dimaksudkan** sebagai tujuan restore (Tahap ini TIDAK membuat database):
   ```powershell
   & "C:\Program Files\PostgreSQL\18\bin\psql.exe" -U postgres -h localhost -c "SELECT datname FROM pg_database ORDER BY datname;"
   ```
2. Database tujuan yang direkomendasikan untuk pemulihan adalah **database kosong
   yang sudah dibuat sebelumnya dan disetujui pemilik** (mis. database uji atau
   database produksi baru), **bukan** `attendance_db` yang sedang dipakai
   development/testing.
3. Beri perhatian ekstra pada host/port: `-h localhost -p 5432` harus sesuai
   instansi yang dimaksud.

## 3. Pemeriksaan Backup Sebelum Restore

```powershell
# 1. Identitas arsip: format CUSTOM, dbname, versi pg_dump/server.
& "C:\Program Files\PostgreSQL\18\bin\pg_restore.exe" --list "<file>.dump" | Select-Object -First 10

# 2. Kelengkapan objek: 13 tabel, 11 sequence, 20 FK.
& "C:\Program Files\PostgreSQL\18\bin\pg_restore.exe" --list "<file>.dump" | Select-String "TABLE DATA"
```

Ekspektasi (dari backup final 2026-11-10): TOC 139 entri · 13 tabel ·
13 `TABLE DATA` · 11 sequence + 11 `SEQUENCE SET` · 20 FK constraint.
Jika angka menyimpang, **jangan** lanjut restore — periksa file backup.

Opsional namun disarankan untuk melihat isi SQL tanpa menjalankan apa pun
(tanpa `--dbname`, `pg_restore` tidak menyentuh database mana pun):

```powershell
& "C:\Program Files\PostgreSQL\18\bin\pg_restore.exe" --no-owner --no-privileges --file="<file-preview>.sql" "<file>.dump"
```

## 4. Contoh Perintah Restore (DOKUMENTASI SAJA — JANGAN DIEKSEKUSI)

Asumsi: database tujuan **sudah dibuat** dan disetujui pemilik, backup valid.

```powershell
# Restore penuh ke database tujuan yang sudah ada.
# Berhenti pada error pertama agar kegagalan tidak dibiarkan setengah jadi.
& "C:\Program Files\PostgreSQL\18\bin\pg_restore.exe" `
  --host localhost --port 5432 `
  --username postgres `
  --dbname "<NAMA_DATABASE_TUJUAN>" `
  --exit-on-error `
  --no-owner --no-privileges `
  "<file>.dump"
```

Penjelasan opsi:

| Opsi | Fungsi | Catatan risiko |
|---|---|---|
| `--dbname` | Database tujuan | **Wajib dipastikan namanya** — restore menimpa isi objek dengan nama sama |
| `--exit-on-error` | Berhenti saat error pertama | Mencegah domino error; gunakan saat restore produksi |
| `--no-owner` | Hilangkan `ALTER ... OWNER TO` | SQL tidak tergantung role sumber (`postgres`) |
| `--no-privileges` | Hilangkan `GRANT`/`REVOKE` | Privilege diatur ulang manual di target bila perlu |
| `--clean` | `DROP` objek tujuan dulu | ⚠️ **Berbahaya** — hapus objek di target; hanya dengan target yang dipastikan + backup valid |
| `--list` | Daftar isi arsip | Read-only, aman |
| `--file` | Ekstrak SQL ke file tanpa restore | Read-only terhadap database, aman |

## 5. Pemeriksaan Pascarestore

Jalankan `psql -U postgres -h localhost -d <NAMA_DATABASE_TUJUAN>` lalu:

```sql
-- a. Seluruh tabel ada (harus 13).
SELECT count(*) FROM information_schema.tables
WHERE table_schema = 'public' AND table_type = 'BASE TABLE';

-- b. Tidak ada FK tidak tervalidasi (harus 0).
SELECT count(*) FROM pg_constraint
WHERE contype = 'f' AND NOT convalidated;

-- c. Sequence pada posisi yang benar (contoh: sessions 25, versions 48).
SELECT sequencename, last_value FROM pg_sequences
WHERE schemaname = 'public' ORDER BY sequencename;

-- d. Jumlah baris tabel utama.
SELECT
  (SELECT count(*) FROM users) AS users,
  (SELECT count(*) FROM admins) AS admins,
  (SELECT count(*) FROM attendance_sessions) AS sessions,
  (SELECT count(*) FROM attendance_session_versions) AS versions,
  (SELECT count(*) FROM attendances) AS attendances,
  (SELECT count(*) FROM security_audit_logs) AS audit_logs,
  (SELECT count(*) FROM _prisma_migrations) AS migrations;
-- Ekspektasi dari backup 2026-11-10:
-- 7 / 4 / 17 / 38 / 6 / 45 / 12
```

## 6. Verifikasi Migration Prisma

```powershell
# Arahkan DATABASE_URL sementara ke database hasil restore (mis. via shell var),
# lalu jalankan status — TANPA migrate deploy kecuali memang disetujui.
npx prisma migrate status
```

Ekspektasi: `12 migrations found` dan **"Database schema is up to date!"** —
karena tabel `_prisma_migrations` beserta isinya ikut terbackup.
Jika status menunjukkan migration "have not been applied", berarti restore
tidak lengkap (biasanya `_prisma_migrations` tidak ikut terdump).

## 7. Pemeriksaan Koneksi Backend Setelah Pemulihan

1. Arahkan `DATABASE_URL` (environment/session yang disetujui, **bukan mengedit
   `.env` development**) ke database hasil restore.
2. Jalankan backend dan periksa log startup; endpoint kesehatan/daftar sesi
   harus merespons tanpa error Prisma.
3. Pemeriksaan cepat dari aplikasi: login admin, buka daftar sesi absensi,
   buka laporan harian. Jangan melakukan absensi uji kecuali itu database uji.

## 8. Catatan Verifikasi

- `pg_restore --list` dan ekstraksi `--file` **bukan bukti restore berhasil**;
  keduanya hanya membuktikan arsip dapat dibaca dan SQL dapat dibangun.
- Keberhasilan restore aktual baru terbukti setelah prosedur di atas dijalankan
  pada database tujuan yang disetujui dan seluruh pemeriksaan pascarestore lolos.

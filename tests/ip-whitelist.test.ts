import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import http from "node:http";
import test from "node:test";
import express from "express";

import {
  loadIpWhitelistConfig,
  parseWhitelistCidrs,
  type IpWhitelistConfig,
} from "../src/config/ip-whitelist.js";
import {
  createIpWhitelistMiddleware,
  isIpAllowed,
} from "../src/middlewares/ip-whitelist.middleware.js";

const devNetworks = parseWhitelistCidrs("192.168.30.0/24");
const appSourceUrl = new URL("../src/app.ts", import.meta.url);
const middlewareSourceUrl = new URL("../src/middlewares/ip-whitelist.middleware.ts", import.meta.url);
const configSourceUrl = new URL("../src/config/ip-whitelist.ts", import.meta.url);

// ---------- Unit: kecocokan CIDR terhadap daftar IP yang dituntut ----------

test("whitelist 192.168.30.0/24 mengizinkan IP development yang dituntut", () => {
  assert.equal(isIpAllowed("192.168.30.174", devNetworks), true, "laptop pengembangan");
  assert.equal(isIpAllowed("192.168.30.171", devNetworks), true, "iPhone pengujian");
  assert.equal(isIpAllowed("192.168.30.100", devNetworks), true, "host lain di subnet");
  assert.equal(isIpAllowed("192.168.30.1", devNetworks), true, "gateway");
});

test("whitelist 192.168.30.0/24 menolak IP luar subnet", () => {
  assert.equal(isIpAllowed("192.168.31.10", devNetworks), false, "subnet tetangga");
  assert.equal(isIpAllowed("192.168.29.5", devNetworks), false);
  assert.equal(isIpAllowed("10.0.0.5", devNetworks), false);
  assert.equal(isIpAllowed("172.16.5.9", devNetworks), false);
  assert.equal(isIpAllowed("8.8.8.8", devNetworks), false);
  assert.equal(isIpAllowed("127.0.0.1", devNetworks), false, "loopback bukan bagian whitelist dev");
});

test("IPv4-mapped IPv6 diproses dengan benar", () => {
  assert.equal(isIpAllowed("::ffff:192.168.30.174", devNetworks), true);
  assert.equal(isIpAllowed("::ffff:192.168.30.171", devNetworks), true);
  assert.equal(isIpAllowed("::ffff:192.168.31.10", devNetworks), false);
  assert.equal(isIpAllowed("::ffff:10.0.0.5", devNetworks), false);
});

test("IP kosong, tidak terbaca, atau tidak valid ditolak (fail closed per request)", () => {
  assert.equal(isIpAllowed(undefined, devNetworks), false);
  assert.equal(isIpAllowed("", devNetworks), false);
  assert.equal(isIpAllowed("bukan-ip", devNetworks), false);
  assert.equal(isIpAllowed("999.999.999.999", devNetworks), false);
  // Alamat IPv6 murni tidak cocok dengan CIDR IPv4 mana pun.
  assert.equal(isIpAllowed("::1", devNetworks), false);
});

test("lebih dari satu CIDR didukung", () => {
  const networks = parseWhitelistCidrs("192.168.30.0/24, 10.0.0.0/8");
  assert.equal(isIpAllowed("192.168.30.174", networks), true);
  assert.equal(isIpAllowed("10.1.2.3", networks), true);
  assert.equal(isIpAllowed("192.168.31.10", networks), false);
  assert.equal(isIpAllowed("10.200.1.1", networks), true);
});

test("CIDR /32 mengizinkan hanya IP persis", () => {
  const networks = parseWhitelistCidrs("192.168.30.174/32");
  assert.equal(isIpAllowed("192.168.30.174", networks), true);
  assert.equal(isIpAllowed("192.168.30.171", networks), false);
});

// ---------- Unit: validasi konfigurasi fail closed ----------

test("whitelist default nonaktif tanpa environment variable", () => {
  const config = loadIpWhitelistConfig({});
  assert.equal(config.enabled, false);
  assert.deepEqual(config.networks, []);
});

test("IP_WHITELIST_ENABLED selain \"true\" tidak mengaktifkan whitelist", () => {
  for (const value of [undefined, "false", "1", "yes", "TRUE", " true", "true "]) {
    const env: Record<string, string | undefined> = { IP_WHITELIST_ENABLED: value };
    assert.equal(loadIpWhitelistConfig(env).enabled, false, `nilai: ${value}`);
  }
});

test("whitelist aktif dengan CIDR valid", () => {
  const config = loadIpWhitelistConfig({
    IP_WHITELIST_ENABLED: "true",
    IP_WHITELIST_CIDRS: "192.168.30.0/24",
  });
  assert.equal(config.enabled, true);
  assert.equal(config.networks.length, 1);
  assert.equal(isIpAllowed("192.168.30.171", config.networks), true);
});

test("whitelist aktif tanpa CIDR gagal secara aman", () => {
  assert.throws(
    () => loadIpWhitelistConfig({ IP_WHITELIST_ENABLED: "true" }),
    /IP_WHITELIST_CIDRS wajib diisi/,
  );
});

test("whitelist aktif dengan CIDR kosong gagal secara aman", () => {
  for (const raw of ["", "   ", ", ,"]) {
    assert.throws(
      () => loadIpWhitelistConfig({ IP_WHITELIST_ENABLED: "true", IP_WHITELIST_CIDRS: raw }),
      /IP_WHITELIST_CIDRS wajib diisi/,
      `nilai: ${JSON.stringify(raw)}`,
    );
  }
});

test("whitelist aktif dengan CIDR tidak valid gagal secara aman", () => {
  for (const raw of ["192.168.30.0/33", "bukan-cidr", "192.168.30.0", "300.1.1.0/8", "192.168.30.0/24,ups"]) {
    assert.throws(
      () => loadIpWhitelistConfig({ IP_WHITELIST_ENABLED: "true", IP_WHITELIST_CIDRS: raw }),
      /tidak valid/,
      `nilai: ${raw}`,
    );
  }
});

// ---------- Integration: middleware pada server HTTP nyata (tanpa database) ----------

function buildTestApp(config: IpWhitelistConfig, hits: { count: number }) {
  const app = express();
  app.use(createIpWhitelistMiddleware(config));
  app.get("/api/secret", (_req, res) => {
    hits.count += 1;
    res.status(200).json({ ok: true, cookie: _req.headers.cookie ?? null });
  });
  return app;
}

async function listenOnLoopback(app: express.Express) {
  const server = http.createServer(app as unknown as http.RequestListener);
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  const port = address && typeof address === "object" ? address.port : 0;
  return {
    port,
    close: () => new Promise<void>((resolve) => server.close(() => resolve())),
  };
}

async function requestJson(
  port: number,
  path: string,
  headers: Record<string, string> = {},
): Promise<{ status: number; body: any; setCookie: string | null }> {
  const res = await fetch(`http://127.0.0.1:${port}${path}`, { headers });
  const body = (await res.json().catch(() => null)) as any;
  return { status: res.status, body, setCookie: res.headers.get("set-cookie") };
}

test("whitelist nonaktif: request dari loopback mencapai handler API", async () => {
  const hits = { count: 0 };
  const app = buildTestApp({ enabled: false, networks: [] }, hits);
  const listener = await listenOnLoopback(app);
  try {
    const res = await requestJson(listener.port, "/api/secret");
    assert.equal(res.status, 200);
    assert.equal(res.body?.ok, true);
    assert.equal(hits.count, 1);
  } finally {
    await listener.close();
  }
});

test("whitelist aktif dengan CIDR loopback: request diizinkan dan cookie utuh", async () => {
  const hits = { count: 0 };
  const app = buildTestApp(parseWhitelistCidrsIntoConfig("127.0.0.0/8"), hits);
  const listener = await listenOnLoopback(app);
  try {
    const res = await requestJson(listener.port, "/api/secret", {
      cookie: "admin_session=test-token; HttpOnly; Path=/",
    });
    assert.equal(res.status, 200);
    assert.equal(hits.count, 1);
    // Middleware tidak menyentuh cookie: nilai HttpOnly asli tersampaikan utuh.
    assert.equal(res.body?.cookie, "admin_session=test-token; HttpOnly; Path=/");
    // Middleware tidak menambahkan cookie apa pun.
    assert.equal(res.setCookie, null);
  } finally {
    await listener.close();
  }
});

test("whitelist aktif tanpa CIDR loopback: request loopback ditolak 403 dan tidak mencapai handler", async () => {
  const hits = { count: 0 };
  const app = buildTestApp(parseWhitelistCidrsIntoConfig("192.168.30.0/24"), hits);
  const listener = await listenOnLoopback(app);
  try {
    const res = await requestJson(listener.port, "/api/secret");
    assert.equal(res.status, 403);
    assert.equal(res.body?.success, false, "format error JSON konsisten");
    assert.match(String(res.body?.message ?? ""), /whitelist/i);
    assert.equal(hits.count, 0, "handler API tidak pernah dijalankan");
    assert.equal(res.setCookie, null, "respons penolakan tidak menyetel cookie");
  } finally {
    await listener.close();
  }
});

test("header X-Forwarded-For palsu tidak dapat melewati whitelist", async () => {
  const hits = { count: 0 };
  const app = buildTestApp(parseWhitelistCidrsIntoConfig("192.168.30.0/24"), hits);
  const listener = await listenOnLoopback(app);
  try {
    // IP koneksi nyata = loopback (di luar whitelist); XFF memalsukan IP yang
    // "diizinkan". Middleware tidak membaca XFF, jadi tetap ditolak.
    const spoofed = await requestJson(listener.port, "/api/secret", {
      "x-forwarded-for": "192.168.30.174",
    });
    assert.equal(spoofed.status, 403);
    assert.equal(hits.count, 0);
  } finally {
    await listener.close();
  }
});

test("header X-Forwarded-For palsu dengan IP luar tidak menolak request yang sah", async () => {
  const hits = { count: 0 };
  const app = buildTestApp(parseWhitelistCidrsIntoConfig("127.0.0.0/8"), hits);
  const listener = await listenOnLoopback(app);
  try {
    // XFF memalsukan IP luar whitelist; keputusan tetap berdasar IP koneksi nyata.
    const res = await requestJson(listener.port, "/api/secret", {
      "x-forwarded-for": "192.168.31.10",
    });
    assert.equal(res.status, 200);
    assert.equal(hits.count, 1);
  } finally {
    await listener.close();
  }
});

test("beberapa CIDR: loopback dan subnet dev keduanya diizinkan", async () => {
  const hits = { count: 0 };
  const app = buildTestApp(
    parseWhitelistCidrsIntoConfig("127.0.0.0/8, 192.168.30.0/24"),
    hits,
  );
  const listener = await listenOnLoopback(app);
  try {
    const res = await requestJson(listener.port, "/api/secret");
    assert.equal(res.status, 200);
    assert.equal(hits.count, 1);
  } finally {
    await listener.close();
  }
});

test("whitelist aktif tanpa CIDR sama sekali menolak semua request (pertahanan kedua)", async () => {
  const hits = { count: 0 };
  const app = buildTestApp({ enabled: true, networks: [] }, hits);
  const listener = await listenOnLoopback(app);
  try {
    const res = await requestJson(listener.port, "/api/secret");
    assert.equal(res.status, 403);
    assert.equal(hits.count, 0);
  } finally {
    await listener.close();
  }
});

function parseWhitelistCidrsIntoConfig(raw: string): IpWhitelistConfig {
  return { enabled: true, networks: parseWhitelistCidrs(raw) };
}

// ---------- Kontrak statis: integrasi di app.ts dan sumber IP ----------

test("app.ts memasang ipWhitelistOnly setelah officeNetworkOnly dan sebelum semua route API", async () => {
  const appSource = await readFile(appSourceUrl, "utf8");
  const officePos = appSource.indexOf("app.use(officeNetworkOnly);");
  const whitelistPos = appSource.indexOf("app.use(ipWhitelistOnly);");
  const firstRoutePos = appSource.indexOf('app.use("/api/');
  assert.notEqual(officePos, -1);
  assert.notEqual(whitelistPos, -1);
  assert.notEqual(firstRoutePos, -1);
  assert.ok(whitelistPos > officePos, "whitelist setelah lapisan kantor");
  assert.ok(whitelistPos < firstRoutePos, "whitelist sebelum semua route API");
  assert.ok(/app\.use\(cookieParser\(\)\);[\s\S]*app\.use\(officeNetworkOnly\);/.test(appSource),
    "cookieParser tetap sebelum lapisan IP");
  // Tidak mengaktifkan trust proxy (alamat koneksi nyata dipakai langsung).
  assert.doesNotMatch(appSource, /trust\s+proxy/i);
});

test("middleware whitelist tidak pernah membaca header dan memakai alamat koneksi nyata", async () => {
  const middlewareSource = await readFile(middlewareSourceUrl, "utf8");
  // Tidak ada jalur kode yang membaca header request mana pun
  // (termasuk X-Forwarded-For): middleware hanya memakai req.socket.
  assert.doesNotMatch(middlewareSource, /req\.get\(/);
  assert.doesNotMatch(middlewareSource, /req\.headers/i);
  assert.match(middlewareSource, /req\.socket\.remoteAddress/);
  assert.match(middlewareSource, /ipaddr\.process/);
});

test("config whitelist fail closed dan hanya mengaktifkan lewat nilai \"true\"", async () => {
  const configSource = await readFile(configSourceUrl, "utf8");
  assert.match(configSource, /=== "true"/);
  assert.match(configSource, /fail closed/i);
});

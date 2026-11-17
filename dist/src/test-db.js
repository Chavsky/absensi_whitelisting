import { prisma } from "./config/database.js";
import { logSafeError } from "./utils/safe-error-logger.js";
async function testConnection() {
    try {
        await prisma.$connect();
        const result = await prisma.$queryRaw `
      SELECT
        current_database() AS current_database,
        CURRENT_TIMESTAMP AS current_timestamp
    `;
        console.log("DATABASE CONNECTION SUCCESS");
        console.log("Database:", result[0]?.current_database);
        console.log("Server time:", result[0]?.current_timestamp);
    }
    catch (error) {
        console.error("DATABASE CONNECTION FAILED");
        logSafeError("DATABASE CONNECTION TEST", error);
        process.exitCode = 1;
    }
    finally {
        await prisma.$disconnect();
    }
}
await testConnection();
//# sourceMappingURL=test-db.js.map
// noinspection JSUnresolvedReference

import * as dotenv from "dotenv";
import { DatabaseType } from "typeorm";
import { toNumber } from "hichchi-utils";

dotenv.config();

// noinspection JSUnusedGlobalSymbols
export default () => ({
    app: {
        port: Number(process.env.PORT || process.env.PORT) || 3000,
        allowedOrigins: String(process.env.APP_ALLOWED_ORIGINS).split(",") || [],
        webUrl: process.env.APP_WEB_URL || "http://localhost:4200",
        environment: process.env.NODE_ENV || "development",
    },
    database: {
        type: (process.env.DATABASE_TYPE || "mysql") as DatabaseType,
        host: process.env.DATABASE_HOST || "localhost",
        user: process.env.DATABASE_USER || "root",
        password: process.env.DATABASE_PASSWORD || "root",
        schema: process.env.DATABASE_SCHEMA || "bot-api",
        port: toNumber(process.env.DATABASE_PORT) || 3306,
        charset: "utf8mb4",
        synchronize: process.env.DATABASE_SYNC === "true",
        ssl: process.env.DATABASE_SSL === "true",
        sslMode: process.env.DATABASE_SSL_MODE || "require",
    },
    regex: {
        email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    },
});

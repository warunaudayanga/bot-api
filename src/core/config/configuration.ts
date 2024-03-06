// noinspection JSUnresolvedReference

import * as dotenv from "dotenv";
import { DatabaseType } from "typeorm";
import { toNumber } from "hichchi-utils";

dotenv.config();

// noinspection JSUnusedGlobalSymbols
export default () => ({
    app: {
        port: Number(process.env.PORT || process.env.APP_PORT) || 3000,
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
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: toNumber(process.env.JWT_EXP) || 60 * 60 * 24,
        refreshSecret: process.env.JWT_REFRESH_SECRET,
        refreshExpiresIn: toNumber(process.env.JWT_REFRESH_EXP) || 60 * 60 * 24 * 30,
    },
    redis: {
        prefix: process.env.REDIS_PREFIX || "",
        host: process.env.REDIS_HOST || "localhost",
        port: Number(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD,
        ttl: Number(process.env.REDIS_CACHE_TTL) || 7890000,
        url: process.env.REDIS_URL || undefined,
    },
    email: {
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT) || 465,
        secure: true,
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    regex: {
        email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    },
});

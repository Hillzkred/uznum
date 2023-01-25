module.exports = {
    "auth": {
        "jwt": {
            "secret": process.env.UZNUM_JWT_SECRET || "uznum-secret",
            "expiresIn": process.env.UZNUM_JWT_EXPIRES_IN || "24h"
        }
    },
    "server": {
        "host": "localhost",
        "port": process.env.UZNUM_SERVER_PORT || 3001
    },
    "cors": {
        "whitelist": process.env.UZNUM_WHITELISTED_DOMAINS || "http://localhost:5173"
    },
    "db": {
        "host": process.env.UZNUM_DB_HOST || "couchbase://localhost",
        "bucket": process.env.UZNUM_DB_BUCKET || "default",
        "scope": process.env.UZNUM_DB_SCOPE || "uznum",
        "user": process.env.UZNUM_DB_USER || "Administrator",
        "password": process.env.UZNUM_DB_PASSWORD || "password",
    }
}
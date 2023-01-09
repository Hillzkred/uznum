module.exports = {
  "server": {
    "host": "localhost",
    "port": process.env.UZNUM_SERVER_PORT || 3001
  },
  "cors": {
    "whitelist": process.env.UZNUM_WHITELISTED_DOMAINS || "http://localhost:3000"
  },
  "db": {
    "host": process.env.UZNUM_DB_HOST || "couchbase://localhost",
    "bucket": process.env.UZNUM_DB_BUCKET || "default",
    "scope": process.env.UZNUM_DB_SCOPE || "uznum",
    "user": process.env.UZNUM_DB_USER || "Administrator",
    "password": process.env.UZNUM_DB_PASSWORD || "password",
  }
}
module.exports = {
  "server": {
    "host": "localhost",
    "port": process.env.UZNUM_SERVER_PORT || 3001
  },
  "cors": {
    "whitelist": process.env.UZNUM_WHITELISTED_DOMAINS || "http://localhost:3000"
  }
}
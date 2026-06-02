require("dotenv").config();

const serverConfig = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI
}

module.exports = serverConfig;
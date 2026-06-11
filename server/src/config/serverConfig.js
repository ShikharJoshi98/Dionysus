require("dotenv").config();

const serverConfig = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI,
    JWT_ACCESS: process.env.JWT_ACCESS,
    JWT_REFRESH: process.env.JWT_REFRESH
}

module.exports = serverConfig;
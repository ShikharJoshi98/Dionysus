const logger = require("../utils/logger");
const serverConfig = require("./serverConfig");
const mongoose = require("mongoose");

const connectDB = async () => {
 try {
     const conn = await mongoose.connect(serverConfig.MONGO_URI);

     if (conn.connection.host) {
         logger.info("DB connected successfully");
     }
 } catch (error) {
     logger.error("Error connecting to DB", error);
 }   
}

module.exports = connectDB
const express = require("express");
const logger = require("./utils/logger");
const serverConfig = require("./config/serverConfig");
const errorHandler = require("./middlewares/error.middleware");
const apiRoutes = require("./routes");
const corsMiddleware = require("./middlewares/cors.middleware");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware);

app.use("/api", apiRoutes);

app.use(errorHandler);

app.listen(serverConfig.PORT, () => {
    logger.info(`Server listening at port ${serverConfig.PORT}`);
})
const AppError = require("../utils/error")

const errorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        return res
            .status(err.statusCode)
            .json({
                success: false,
                message: err.message
            });
    }

    console.error("Unhandled Error", err.message);
}

module.exports = errorHandler
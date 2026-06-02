const successResponse = (res, data = {}, message = "Successful", statusCode = 200) => {
    return res
        .status(statusCode)
        .json({
            success: true,
            data,
            message
        });
}

module.exports = successResponse;
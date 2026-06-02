const authService = require("../services/auth.service");
const successResponse = require("../utils/response");
const STATUS_CODE = require("../utils/statusCode");

const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const user = await authService.createUser({ name, email, password });

        successResponse(res, {}, "User registered successfully", STATUS_CODE.CREATED);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    register
}
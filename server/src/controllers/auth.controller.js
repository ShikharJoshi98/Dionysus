const serverConfig = require("../config/serverConfig");
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

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { user, accessToken, refreshToken } = await authService.loginUser({ email, password });

        const accessCookieOptions = {
            httpOnly: true,
            secure: serverConfig.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 30 * 60 * 1000
        };

        const refreshCookieOptions = {
            httpOnly: true,
            secure: serverConfig.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        };

        res.cookie("accessToken", accessToken, accessCookieOptions);
        res.cookie("refreshToken", refreshToken, refreshCookieOptions);

        successResponse(res, user, "Logged in successfully", STATUS_CODE.OK);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    register,
    login
}
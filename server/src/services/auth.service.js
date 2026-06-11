const User = require("../models/user.model");
const AppError = require("../utils/error");
const { generateAccessToken, generateRefreshToken } = require("../utils/generateToken");
const STATUS_CODE = require("../utils/statusCode");

const createUser = async (data) => {
    try {
        const userExist = await User.findOne({
            email: data.email
        });
        if (userExist) {
            throw new AppError("User Already exists", STATUS_CODE.CONFLICT);
        }

        const user = await User.create(data);
        return user;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("Error in Creating user", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

const loginUser = async (data) => {
    try {

        const email = String(data.email).toLowerCase().trim();
        const password = String(data.password);

        const user = await User.findOne({ email });

        if (!user) {
            throw new AppError("Invalid Credentials", STATUS_CODE.UNAUTHORIZED);
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            throw new AppError("Invalid Credentials", STATUS_CODE.UNAUTHORIZED);
        }

        return {
            user,
            accessToken: generateAccessToken(
                user._id
            ),
            refreshToken: generateRefreshToken(
                user._id
            )
        };

    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("Error login user", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
};

module.exports = {
    createUser,
    loginUser
}
const User = require("../models/user.model");
const AppError = require("../utils/error");
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

module.exports = {
    createUser
}
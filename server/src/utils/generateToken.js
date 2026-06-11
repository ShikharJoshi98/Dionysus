const jwt = require("jsonwebtoken");
const serverConfig = require("../config/serverConfig");

const generateAccessToken = (userId) => {
    return jwt.sign(
        {
            userId
        },
        serverConfig.JWT_ACCESS,
        {
            expiresIn: "30m"
        }
    );    
}

const generateRefreshToken = (userId, tokenVersion) => {
    return jwt.sign(
        {
            userId,
            tokenVersion
        },
        serverConfig.JWT_REFRESH,
        {
            expiresIn: "7d"
        }
    );    
}

const verifyRefreshToken = (token) => {
    return jwt.verify(token, serverConfig.JWT_REFRESH);
}

const verifyAccessToken = (token) => {
    return jwt.verify(token, serverConfig.JWT_ACCESS);
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
    verifyAccessToken
};
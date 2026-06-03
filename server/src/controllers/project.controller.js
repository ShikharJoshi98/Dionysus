const projectService = require("../services/project.service");
const STATUS_CODE = require("../utils/statusCode");

const create = async (req, res, next) => {
    try {
        const { name, githubUrl } = req.body;
        const userId = req.user._id;

        const project = await projectService.createProject({ name, githubUrl, userId });

        successResponse(res, project, "Project created successfully", STATUS_CODE.CREATED);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create
}
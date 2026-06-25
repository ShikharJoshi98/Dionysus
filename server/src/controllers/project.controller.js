const projectService = require("../services/project.service");
const successResponse = require("../utils/response");
const STATUS_CODE = require("../utils/statusCode");

const create = async (req, res, next) => {
    try {
        const { projectName:name, projectUrl:githubUrl } = req.body;
        const userId = req.user._id;
        const project = await projectService.createProject({ name, githubUrl, userId });

        successResponse(res, project, "Project created successfully", STATUS_CODE.CREATED);
    } catch (error) {
        next(error);
    }
}

const getAll = async (req, res, next) => {
    try {
        const userId = req.user._id;

        const projects = await projectService.getProjects(userId);

        successResponse(res, projects, "Project fetched successfully", STATUS_CODE.OK);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    getAll
}
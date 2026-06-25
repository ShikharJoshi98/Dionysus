const Project = require("../models/project.model");
const AppError = require("../utils/error");
const logger = require("../utils/logger");
const STATUS_CODE = require("../utils/statusCode");

const createProject = async (data) => {
    try {
        const projectExist = await Project.findOne({
            githubUrl: data.githubUrl
        });

        if (projectExist) {
            throw new AppError("Project already exists", STATUS_CODE.CONFLICT);
        }

        const project = await Project.create(data);
        
        return project;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("Error in Creating Project", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

const getProjects = async (id) => {
    try {
        const userId = String(id);
        const projects = await Project.find({ userId });

        if (!projects) {
            throw new AppError("Cannot find projects for this user", STATUS_CODE.CONFLICT);
        }

        return projects;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("Error in fetching Projects", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createProject,
    getProjects
}
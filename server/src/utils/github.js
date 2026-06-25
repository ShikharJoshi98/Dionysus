const { Octokit } = require("octokit");
const serverConfig = require("../config/serverConfig");

const octokit = new Octokit({
    auth: serverConfig.GITHUB_TOKEN
})
const mongoose = require("mongoose");

const commitSchema = new mongoose.Schema({
    commitMessage: {
        type: String
    },
    commitHash: {
        type: String
    },
    commitAuthorName: {
        type: String
    },
    commitDate: {
        type: Date
    },
    summary: {
        type: String
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true
    }
});

const Commit = mongoose.model("Commit", commitSchema);

module.exports = Commit
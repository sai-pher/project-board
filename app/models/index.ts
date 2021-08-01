const dbConfig = require("../config/db.config");

import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const project = require("./project/project.model");


const db = {
    mongoose: mongoose, 
    url: dbConfig.url,
    projects: project(mongoose)
};


module.exports = db;
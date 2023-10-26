import express from "express";
import Project from "../models/Project.js";
import { ProjectDao } from "../dao/ProjectDao.js";

const project = express.Router();
project.use(express.json());


const projectDao = new ProjectDao();
projectDao.readFile();


project.get("/", (req, res) => {
    res.json(projectDao.getAll());
})

project.get("/:id", (req, res) => {
    let project = projectDao.findById(req.params.id);
    if (project == undefined) {
        res.status(404).json({code : 404,message: "Project not found"});
    }
    res.json(project);
})
project.post("/", (req, res) => {
    const {title, description, status} = req.body;
    let project = new Project(null, title, description, status);
    res.json(projectDao.save(project));
})
export default project;
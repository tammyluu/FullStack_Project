import express from "express";
import { ProjectDao } from "./dao/ProjectDao.js";
import Project from "./models/Project.js";

const app = express();

// Classe d'accès aux données
const projectDao = new ProjectDao();

// Utilisation du middleware pour la sérialisation/desérialisation en JSON
app.use(express.json());


app.get('/projects', (req, res) => {
    res.json(projectDao.getAll());
});


app.get('/projects/:projectId', (req, res) => {
    let project = projectDao.findById(req.params.projectId);

    if(project == undefined) {
        res.status(404).json({code: 404, message: "project not found"});
    }

    res.json(project);
});

app.post('/projects', (req, res) => {
    const {title, description, status} = req.body;
    let project = new Project(null, title, description, status);
    res.json(projectDao.save(project));
});

app.put('/projects/:projectId', (req, res) => {
    
    const {id, title, content, status} = req.body;

   
    if(req.params.projectId != id) res.sendStatus(409);

 
    let project = new Project(id, title, content, status);

    // Mise à jour 
    projectDao.updateProject(project) ? res.sendStatus(200) : res.status(400).json({code: 400, message: "problème lors de la mise à jour du project"})
});

// Modifier status
app.patch('/projects/:projectId/status', (req, res) => {
    projectDao.updateStatus(req.params.projectId) ? res.sendStatus(200) : res.sendStatus(400);
});

// Supprimer 
app.delete('/projects/:projectId', (req, res) => {
    projectDao.deleteProject(req.params.projectId);
    res.sendStatus(204);
});

// Récupérer par title
app.get('/todos/search/:search', (req, res) => {
    res.json(projectDao.searchByTitle(req.params.search));
});

app.listen(3001, () => {
    projectDao.readFile();
    console.log('http://127.0.0.1:3001');
});
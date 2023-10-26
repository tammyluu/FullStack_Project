import { readFileSync, writeFileSync } from "fs";
import { v4 as uuidv4 } from "uuid";
import { resolve } from "path";

export class ProjectDao {
  constructor() {
    this.file = resolve("./data/project.json");
    this.project = [];
  }

  readFile() {
    const file = readFileSync(this.file, { encoding: "utf-8" });
    this.projects = JSON.parse(file);
  }

  writeFile() {
    writeFileSync(this.file, JSON.stringify(this.projects));
  }

  getAll() {
    return this.projects;
  }

  save(project) {
    // Génération d'un uuid
    project.id = uuidv4();
    // Ajout au tableau 
    this.projects.push(project);
    // Mise à jour du fichier db.json (
    this.writeFile();
    return project;
  }

  findById(id) {
    return this.projects.find((t) => t.id === id);
  }

  deleteProject(id) {
    this.projects = this.projects.filter((t) => t.id !== id);
    this.writeFile();
  }

  updateProject(projectUpdate) {
    const project = this.findById(projectUpdate.id);
    if (project == undefined) {
      return false;
    }
    project.status = projectUpdate.status;
    project.title = projectUpdate.title;
    project.description = projectUpdate.description;

    this.writeFile();
    return true;
  }

  updateStatus(id) {
    const project = this.findById(id);
    if (project == undefined) {
      return false;
    }
    project.status = !project.status;
    this.writeFile();

    return true;
  }

  
}
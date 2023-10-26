# FullStack_Project
Développement d'une application ReactJS avec API REST en ExpressJS
Contexte:
Avec l'essor du télétravail et de la collaboration à distance, avoir un outil permettant de suivre l'avancement
des projets est essentiel. Pour cette évaluation, vous développerez une application de suivi de projets -
"ProjectTracker Pro".

--------Objectifs: ----------------

* Front-End ( Reactjs)
   
   Créer une application ReactJS permettant de :
   Ajouter, supprimer, et modifier des projets.
   Assigner des états aux projets : "Non débuté", "En cours", "En attente" et "Terminé".
   Filtrer les projets selon leur état.
   Voir les détails de chaque projet en cliquant dessus.
   Fonctionnalités:
      1. Page d'accueil : Liste de tous les projets avec possibilité de filtrage selon l'état.
      2. Page de détail d'un projet : Affiche le titre, la description, la date de début, la date estimée de fin et
      l'état actuel du projet. Cette page permet également de modifier ou supprimer le projet.
      3. Formulaire d'ajout de projet: Permet à l'utilisateur d'ajouter un nouveau projet avec tous les détails
      nécessaires.

* Back-End : (  NodeJS, Express)
  
 ----------- " npm start" ----------
          
Développer une API REST avec ExpressJS pour :
Gérer les projets en utilisant des routes CRUD.
Stocker les projets dans une base de données de votre choix.

   Fonctionnalités:
      1. Route /projects (GET): Récupère la liste de tous les projets.
      2. Route /projects (POST): Ajoute un nouveau projet.
      3. Route /projects/:projectId (GET): Récupère les détails d'un projet spécifique.
      4. Route /projects/:projectId (PUT): Met à jour les détails d'un projet spécifique.
      5. Route /projects/:projectId (DELETE): Supprime un projet spécifique.
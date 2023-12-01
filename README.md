# Back-end

## Stack technique :

    - NodeJS
    - Express
    - MongoDB
    - Mongoose

## Dépendances installées :

    - body-parser
    - dotenv
    - errorhandler
    - express
    - mongoose
    - morgan
    - nodemon

## Port utilisé :

- 9000

## Endpoints :

- GET : http://localhost:9000/api/products
- POST : http://localhost:9000/api/products
- GET : http://localhost:9000/api/products/:id
- PATCH : http://localhost:9000/api/products/:id
- PUT : http://localhost:9000/api/products/:id
- DELETE : http://localhost:9000/api/products/:id

## Répertoire "/images" à la racine

Ce dossier images contient les images des captures d'écran réalisées lors du test sur POSTMAN et sur MongoDB ATLAS.

## Architecture back :

back-products
|-- /controllers
| |-- product.controller.js
|-- /database
| |-- index.js
|-- /models
| |-- product.model.js
|-- /queries
| |-- product.queries.js
|-- /routes
| |-- index.js
| |-- product.routes.js
|-- .gitignore
|-- app.js
|-- package.json
|-- yarn.lock
|-- /images
|-- README.md

## Améliorations à faire (mais manque de temps) :

- Ajout d'un middleware pour la validation personnalisée des données d'entrée.

- Ajout d'une collection d'images pour séparer les images de produits dans une table à part.

- Ajout des endpoints pour l'ajout et la récupération des images.

- Ajout d'un middleware de gestion avancé des erreurs.

- Ajout des tests unitaires de l'API.

- Et bien d'autres fonctionnalités.

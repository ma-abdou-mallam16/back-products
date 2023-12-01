const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
const routing = require("./routes");
require("./database");

const app = express();
exports.app = app;

// Utilisation du middleware `bodyParser` pour parser les requêtes JSON.
app.use(bodyParser.json());

// Utilisation du middleware nommé `routes` pour faire référence à un fichier de routes.
app.use(routing);

// Utilisation du middleware `morgan` pour enregistrer les journaux des requêtes HTTP.
app.use(morgan("short"));

// Utilisation du middleware `express.json` pour analyser les données du corps des requêtes entrantes au format JSON et les rendre disponibles dans `req.body`.
app.use(express.json());

// Utilisation du middleware `express.urlencoded` pour analyser les données du corps des requêtes entrantes au format URL encodé.
app.use(express.urlencoded({ extended: true }));

// Gestion des erreurs
if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    const code = err.code || 500;
    res.status(code).json({
      code: code,
      message: code === 500 ? null : err.message,
    });
  });
}

// Démarrage du serveur
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

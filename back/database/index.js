const mongoose = require("mongoose");
require("dotenv").config();

// Connexion à MongoDB
const mongoURI = process.env.DATABASE_URL;

exports.clientPromise = mongoose
  .connect(mongoURI)
  .then(() => console.log("Connexion db ok !"))
  .catch((err) => console.log(err));

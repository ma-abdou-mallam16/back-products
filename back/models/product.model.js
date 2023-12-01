const mongoose = require("mongoose");
const schema = mongoose.Schema;

// Product Schema
const productSchema = schema({
  code: {
    type: String,
    required: true,
    maxlength: 20, // limiter la longueur maximale du code à 20 caractères
  },
  name: {
    type: String,
    required: true,
    minlength: 3, // exiger un minimum de 3 caractères pour le nom
    maxlength: 50, // limiter la longueur maximale du nom à 50 caractères
  },
  description: {
    type: String,
    required: true,
    maxlength: 250, // limiter la longueur maximale de la description à 250 caractères
  },
  price: {
    type: Number,
    required: true,
    min: 0, // le prix doit être un nombre positif ou nul
  },
  quantity: {
    type: Number,
    required: true,
    min: 0, // la quantité doit être un nombre positif ou nul
  },
  inventoryStatus: {
    type: String,
    required: true,
    enum: ["in_stock", "out_of_stock"], // limiter l'état du stock à deux valeurs prédéfinies
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    maxlength: 100, // limiter la longueur maximale du chemin de l'image à 100 caractères
  },
  rating: {
    type: Number,
    min: 0,
    max: 5, // limiter la note à une valeur entre 0 et 5
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;

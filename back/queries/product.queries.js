const Product = require("../models/product.model");

exports.getProducts = () => {
  return Product.find({}).exec();
};

exports.createProduct = (product) => {
  const newProduct = new Product(product);
  return newProduct.save();
};

exports.getProduct = (productId) => {
  return Product.findOne({ _id: productId }).exec();
};

exports.editProduct = (productId, product) => {
  return Product.findByIdAndUpdate(
    productId,
    { $set: product },
    { new: true, runValidators: true }
  );
};

exports.updateProduct = (productId, product) => {
  return Product.findByIdAndUpdate(
    productId,
    { $set: product },
    { overwrite: true, runValidators: true }
  );
};

exports.deleteProduct = (productId) => {
  return Product.findByIdAndDelete(productId).exec();
};

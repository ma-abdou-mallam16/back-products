const {
  getProducts,
  createProduct,
  getProduct,
  editProduct,
  updateProduct,
  deleteProduct,
} = require("../queries/product.queries");

exports.productList = async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.productNew = async (req, res) => {
  try {
    const body = req.body;
    const newProduct = await createProduct({ ...body });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.fetchProduct = async (req, res) => {
  try {
    // Utilisation de la fonction findProduct ici
    const product = await findProduct(req.params.id);

    // Vérification si le produit est trouvé
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Si le produit est trouvé, le retourner dans la réponse JSON
    res.json(product);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.productEdit = async (req, res, next) => {
  const productId = req.params.id;
  const productUpdates = req.body;

  try {
    // Trouver le produit par son ID
    const product = await findProduct(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // const newProduct = await createProduct({ ...productUpdates });
    // res.status(201).json(newProduct);

    // Mettre à jour le produit avec les nouvelles données
    const updatedProduct = await editProduct(productId, productUpdates);

    // Renvoyer le produit mis à jour
    res.json(updatedProduct);
  } catch (err) {
    next(err); // Passez l'erreur au gestionnaire d'erreurs global
  }
};

exports.productUpdate = async (req, res, next) => {
  const productId = req.params.id;
  const productUpdates = req.body;

  try {
    // Trouver le produit par son ID
    const product = await findProduct(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // const newProduct = await createProduct({ ...body });
    // res.status(201).json(newProduct);

    // Mettre à jour le produit avec les nouvelles données
    const updatedProduct = await updateProduct(productId, productUpdates);

    // Renvoyer le produit mis à jour
    res.json(updatedProduct);
  } catch (err) {
    next(err); // Passez l'erreur au gestionnaire d'erreurs global
  }
};

exports.productDelete = async (req, res, next) => {
  try {
    // Utilisation de la fonction findProduct ici
    const product = await findProduct(req.params.id);

    // Vérification si le produit est trouvé
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await deleteProduct(product);
    res.json({ message: "Product deleted" });
  } catch (err) {
    next(err);
  }
};

// Fonction pour trouver un produit par ID (utilisée en interne dans fetchProduct, productEdit, )
async function findProduct(productId) {
  try {
    const product = await getProduct(productId);
    return product;
  } catch (err) {
    throw new Error(err.message);
  }
}

const router = require("express").Router();
const {
  productList,
  productNew,
  fetchProduct,
  productEdit,
  productUpdate,
  productDelete,
} = require("../controllers/product.controller");

router.get("/products", productList);
router.post("/products", productNew);
router.get("/products/:id", fetchProduct);
router.patch("/products/:id", productEdit);
router.put("/products/:id", productUpdate);
router.delete("/products/:id", productDelete);

module.exports = router;

const router = require("express").Router();
const products = require("./product.routes");

router.use("/api", products);

router.get("/", (req, res) => {
  res.redirect("index");
});

module.exports = router;

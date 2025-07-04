const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.post("/products", createProduct);
productRoutes.get("/products", getAllProducts);
productRoutes.get("/products/:id", getProductById);
productRoutes.put("/products/:id", updateProduct);
productRoutes.post("/products", deleteProduct);

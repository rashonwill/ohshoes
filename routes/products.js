const express = require("express");
const productsRouter = express.Router()
// const jwt = require('jsonwebtoken');
const { 
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
} = require("../db");

const { requireUser } = require("./utils")



// Products
productsRouter.get("/", async (req, res, next) => {
  try {
    const products = await getAllProducts();

    res.send({
      products: products,
    });
  } catch ({ name, messages }) {
    next({ name: "GetProductsError", message: "Unable to get products" });
  }
});

productsRouter.post("/", async (req, res, next) => {
  const { img_url, name, description, price, inventory, category } = req.body;
  const productData = {};

  try {
    productData.img_url = img_url;
    productData.name = name;
    productData.description = description;
    productData.price = price;
    productData.inventory = inventory;
    productData.category = category;

    if (!name) {
      res.send(next(console.error({ message: "Must include name" })));
    }

    if (!description) {
      res.send(next(console.error({ message: "Must include description" })));
    }

    if (!price) {
      res.send(next(console.error({ message: "Must include price" })));
    }
    const newProduct = await createProduct(productData); // req.body
    res.send({
      message: "Product successfully created!",
      newProduct,
    });
  } catch ({ name, message }) {
    next({
      name: "ProductCreateError",
      message: "Unable to create new Product.",
    });
  }
});

productsRouter.patch("/:product_id", async (req, res, next) => {
  const { product_id } = req.params;
  const { img_url, name, description, price, inventory, category } = req.body;

  const updateFields = {};

  if (img_url) {
    updateFields.img_url = img_url;
  }

  if (name) {
    updateFields.name = name;
  }

  if (description) {
    updateFields.description = description;
  }

  if (price) {
    updateFields.price = price;
  }

  if (inventory) {
    updateFields.inventory = inventory;
  }

  if (category) {
    updateFields.category = category;
  }

  try {
    const updatedProduct = await updateProduct(product_id, updateFields);
    res.send({ updatedProduct });
  } catch ({ name, message }) {
    next({ name: "ProductUpdateError", message: "Unable to update product info!" });
    console.error(message)
  }
});

productsRouter.delete("/:product_id", async (req, res, next) => {
  try {
    const product = await getProductById(req.params.product_id);
    if (product.active) {
      const updatedProduct = await updateProduct(product.id, { active: false });
      res.send({ product: updatedProduct });
    } else {
      res.send({
        name: "ProductInactiveError",
        message: "This product is already deleted!",
      });
    }
  } catch ({ name, message }) {
    next({ name: "ProductUpdateError", message: "Unable to update product!" });
  }
});

module.exports = productsRouter;

import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@description Fetch all products
//@route Get api/products
//@access Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@description Fetch a product
//@route Get api/products/:id
//@access Public

const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getProducts, getProductsById };

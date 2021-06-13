const express = require('express');
const router = express.Router();

//import controllers inside the routes
const { getAllProducts, getProductById } = require('../controller/productControllers');

//@description: GET all products from DB
//@route GET /api/products
//@access Public
//when this route is called, then the controller getAllProducts is called
router.get('/', getAllProducts);

//@description: GET a product by id from DB
//@route GET /api/products/:id
//@access Public
//when this route is called, then the controller getProductById is called
router.get('/:id', getProductById);

module.exports = router;
const express = require('express');
const path = require('path');
const router = express.Router();

const productsController = require('../controllers/admin');

router.get('/add-product', productsController.getAddProduct);

router.get('/products', productsController.getProducts);

router.post('/add-product', productsController.addNewProduct);

module.exports = router;

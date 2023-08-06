const express = require('express');
const path = require('path');

const router = express.Router();

const productsController = require('../controllers/shop');

router.get('/', productsController.getIndex);
router.get('/products', productsController.getProducts);
router.get('/cart', productsController.getCart);
router.get('/checkout', productsController.getCheckout);
router.get('/orders', productsController.getOrders);

module.exports = router;

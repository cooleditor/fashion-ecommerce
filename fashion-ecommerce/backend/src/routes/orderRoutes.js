const express = require('express');
const { createOrder, getUserOrders } = require('../controllers/orderController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to create a new order
router.post('/', authenticate, createOrder);

// Route to get past orders for the authenticated user
router.get('/', authenticate, getUserOrders);

module.exports = router;
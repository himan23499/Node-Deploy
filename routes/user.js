const Cart = require('../controller/user')

const express = require('express');
const cartRouter = express.Router();

cartRouter
.post('/cart',Cart.createCart)
.get('/cart',Cart.getAllCarts)
.get('/cart/:id',Cart.getCart)
.put('/cart/:id',Cart.updateCart)
.patch('/cart/:id',Cart.replaceCart)
.delete('/cart/:id',Cart.deleteCart)

exports.cartRouter = cartRouter;
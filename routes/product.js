const product = require('../controller/products')

const express = require('express');
const Router = express.Router();

Router
.post('/reciepe',product.createProducts)
.get('/reciepe',product.getAllProdcuts)
.get('/reciepe/:id',product.getProdcut)
.put('/reciepe/:id',product.updateProdcuts)
.patch('/reciepe/:id',product.replaceProducts)
.delete('/reciepe/:id',product.deleteProducts)

exports.Router = Router;
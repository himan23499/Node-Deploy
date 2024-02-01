// const product = require('./controller/products')

const express = require('express');
const server = express();
const productRouter = require('./routes/product')
const cartRouter = require('./routes/user')
// Base Url/API Root  example-google.com/api/v1/
server.use(express.json());
server.use('/api/v1',productRouter.Router)
server.use('/api/cart/v1',cartRouter.cartRouter)


server.listen(8001);


//mongodb commands

// db.reciepe.find( {$or:[{"rating": {$gt:4.5}},{id:{$gt:1}}]})
//db.reciepe.find( {$and[{"rating": {$gt:4.5}},{id:{$gt:1}}]})
//db.reciepe.find( {"rating": {$gt:4.5},id:{$gt:1}})  //this is called cursor result from database for this query
//db.reciepe.find( {"rating": {$gt:4.5},id:{$gt:1}}).sort({"servings":-1})
// db.reciepe.find( {"rating": {$gt:4.5},id:{$gt:1}}).sort({"servings":-1}).limit(1)
//db.reciepe.countDocuments({"servings":{$gt:3}})
//db.reciepe.find({"servings":{$gt:3}},{'name':1,'_id':0})//1 project 0 hide

//update
//db.reciepe.updateOne({'id':1},{$set:{'name':'himan masala'}})
//db.reciepe.updateOne({'id':10},{$set:{'name':'himan masala'}},{'upsert':true}) //upsert means update or insert if the filter does not matches then it will create a new document of given replace values.
//db.reciepe.updateMany({'id':{$gt:2}},{$set:{'name':'himan masala'}})

//replace - this will replace complete document with the specified document.
//db.reciepe.replaceOne({'id':2},{'name':'himan masala'})

//Delete
//db.reciepe.deleteOne({'_id':ObjectId('65b63b921b9b080ab8a3e953')})
//db.reciepe.deleteOne({'id':3})
//db.reciepe.deleteMany({'servings':{$gt:3}})

//Password - org
//WXCdPQYTUeKxhb3e
//Password Database
//pRZc8o4y7KYtGEMx
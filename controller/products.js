const mongoose = require('mongoose');
const fs=require('fs')

const model = require('../model/product');
const Product = model.Product;  

exports.createProducts = (req,res)=>{
    const product = new Product(req.body);//this instance is only needed to create documents
    
    product.save()
    // product.save((err,doc)=>{
    //     console.log({err,doc})
    // }) this is giving error
    res.json(product);
     
 }
 exports.getAllProdcuts = async(req,res)=>{
    const product = await Product.find({price:{$gt:12000}})
    res.json(product)
    
}
exports.getProdcut = async(req,res)=>{
    
    const id=req.params.id;
    const product = await Product.findById(id)
    // const item=Product.find(p=>p.id==+id);
    res.json(product)
    
}
exports.updateProdcuts = async(req,res)=>{
    const id=req.params.id;
    try{
        const doc =  await Product.findOneAndUpdate({_id:id},req.body,{new:true});
        res.status(200).json(doc);
        }catch(err){
            console.log(err);
            res.status(401).json(err);
        }
    
}
exports.replaceProducts = async(req,res)=>{
    const id=req.params.id;
    // const item=Product.findIndex(p=>p.id==id);
    // const rec=Product[item];
    // Product.splice(item,1,{...rec,...req.body})
    try{
    const doc =  await Product.findOneAndReplace({_id:id},req.body,{new:true});
    res.status(200).json(doc);
    }catch(err){
        console.log(err);
        res.status(401).json(err);
    }
}
exports.deleteProducts = async(req,res)=>{
    const id=req.params.id;
    // const pro = Product.findIndex(p=>p.id==id);
    // Product.splice(pro,1);
    // res.status(201).json(Product);
    try{
        const doc =  await Product.findOneAndDelete({_id:id});
        res.status(200).json(doc);
        }catch(err){
            console.log(err);
            res.status(401).json(err);
        }
}
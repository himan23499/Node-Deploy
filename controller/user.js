// const fs=require('fs')
// const result=JSON.parse(fs.readFileSync('data.json','utf-8'));
// const carts = result.carts;
const mongoose = require('mongoose')
const fs=require('fs')
const modal=require('../model/user');
const carts = modal.User;

exports.createCart = (req,res)=>{
    // console.log(req.body);
    // carts.push(req.body);
    try{

    
    const reciepe = new carts(req.body);
    reciepe.save()
    res.json(reciepe);
    }catch(err){
        res.status(400).json(err);
    }

 
     
 }
 exports.getAllCarts = async(req,res)=>{
   const reciepe = await carts.find()
    res.json(reciepe)
    
}
exports.getCart = async(req,res)=>{
    const id=req.params.id;
    // const item=carts.find(p=>p.id==+id);
    const reciepe = await carts.findById(id)
    res.json(reciepe)
    
}
exports.updateCart = async(req,res)=>{
    const id=req.params.id;
    // const item=carts.findIndex(p=>p.id==id);
    // carts.splice(item,1,{id,...req.body})
    const reciepe = await carts.findOneAndUpdate({_id:id},req.body,{new:true})
    res.json(reciepe)
    
}
exports.replaceCart = async(req,res)=>{
    const id=req.params.id;
    // const item=carts.findIndex(p=>p.id==id);
    // const rec=carts[item];
    // carts.splice(item,1,{...rec,...req.body})
    const reciepe = await carts.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(reciepe);
}
exports.deleteCart = async(req,res)=>{
    const id=req.params.id;
    // const pro = carts.findIndex(p=>p.id==id);
    // carts.splice(pro,1);
    const reciepe = await carts.findOneAndDelete({_id:id});
    res.json(reciepe);
}
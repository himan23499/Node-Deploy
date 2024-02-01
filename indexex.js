// const http = require('http');
const fs= require('fs');
require('dotenv').config()
const mongoose = require('mongoose');
const { Schema } = mongoose;
const resul1t=fs.readFileSync('index.html','utf-8');
const result=JSON.parse(fs.readFileSync('data.json','utf-8'));
const recipe = result.recipes;

const express = require('express');
const morgan = require('morgan')
const server = express();
//db Connection
main().catch(err=>console.log(err))
async function main(){

    await mongoose.connect('mongodb://127.0.0.1:27017/Products');
    console.log("Connected to Database")
}

//Third party middleware
server.use(morgan('default'));
//built-in middlewares

//body parser 
server.use(express.json());
// server.use(express.static('public'));//this will load index.html file only directly from middleware and will not goto server for parsing and will also overide get req below.
server.use(express.static(process.env.PUBLIC_DIR));//this will load index.html file only directly from middleware and will not goto server for parsing and will also overide get req below.
server.use(express.urlencoded());

//custome middleware
// server.use((req,res,next)=>{
//     console.log(req.hostname,req.ip, new Date(),req.get('User-Agent'));
//     next();
// })
const auth=(req,res,next)=>{
    // console.log(req.query)
    // if(req.body.password=='himan'){
    //     next()
    // }else{
    //     res.sendStatus(401);
    // }
    next();
}


// server.use(auth);
//API - Endpoint - Route
// server.get('/demo',auth,(req,res)=>{
//     // res.send("hello");
//     // res.sendStatus(404);
//     // res.status(200).send('/index.html');
//     res.send({type:'get'})
//     // res.sendFile('D:/nodejs/Nodejs Practice/nodech1/index.html')
// })
server.get('/products/:id',auth,(req,res)=>{
    // res.send("hello");
    // res.sendStatus(404);
    // res.status(200).send('/index.html');
    //url parameters to send data to server.
    console.log(req.params);
    res.json({type:'get'})
    // res.sendFile('D:/nodejs/Nodejs Practice/nodech1/index.html')
})
server.post('/',auth,(req,res)=>{
    res.json({type:'post'});
})
server.put('/',(req,res)=>{
    res.json({type:'put'});
})
server.delete('/',(req,res)=>{
    res.json({type:'delete'});
})
server.patch('/',(req,res)=>{
    res.json({type:'patch'});
})
server.listen(8082,()=>{
    console.log("server Started");
});
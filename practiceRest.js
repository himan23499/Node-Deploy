const fs=require('fs')
const result=JSON.parse(fs.readFileSync('data.json','utf-8'));
const recipe = result.recipes;

const express = require('express');
const server = express();
// Base Url/API Root  example-google.com/api/v1/
server.use(express.json());

//Create data in Api CRUD
server.post('/reciepe',(req,res)=>{
    console.log(req.body);
    recipe.push(req.body);
 res.json(req.body);
     
 })
 
//Read Api GET
server.get('/reciepe',(req,res)=>{
    
    res.json(recipe)
    
})
server.get('/reciepe/:id',(req,res)=>{
    const id=req.params.id;
    const item=recipe.find(p=>p.id==+id);
    res.json(item)
    
})


//Update PUT Api
server.put('/reciepe/:id',(req,res)=>{
    const id=+req.params.id;
    const item=recipe.findIndex(p=>p.id==id);
    recipe.splice(item,1,{id,...req.body})
    res.json(item)
    
})

//Update Patch
server.patch('/reciepe/:id',(req,res)=>{
    const id=+req.params.id;
    const item=recipe.findIndex(p=>p.id==id);
    const rec=recipe[item];
    recipe.splice(item,1,{...rec,...req.body})
    res.status(201).json(item);
}

)

//Delete delete
server.delete('/reciepe/:id',(req,res)=>{
    const id=+req.params.id;
    const pro = recipe.findIndex(p=>p.id==id);
    recipe.splice(pro,1);
    res.status(201).json(recipe);
})
server.listen(8001);
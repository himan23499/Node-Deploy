const express = require('express');

const app = express();
app.get('/demo/:id/:name/:age',(req,res)=>{
    console.log(req.params);
    res.send(req.params);
})


app.listen(8001);
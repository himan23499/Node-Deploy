require('dotenv').config()
const http = require('http');
const fs= require('fs');
const express = require('express');
const server1 = express();
const data={
    age:45
}
server1.use(express.static(process.env.PUBLIC_DIR));
console.log(process.env.DB_Password)
const ans='';
const resul1t=fs.readFileSync('index.html','utf-8');
const result=JSON.parse(fs.readFileSync('data.json','utf-8'));
const recipe = result.recipes;
const server=http.createServer((req,res)=>{
    console.log(req.url)
    
    if(req.url.startsWith('/products') && req.method == 'GET'){
        req.par
        const id=req.url.split('/')[2];
        const pid = recipe.filter((pid)=>pid.id===(+id));
        console.log(pid);
        res.end(JSON.stringify(pid));
    }

    if(req.url.startsWith('/products') && req.method == 'POST'){
        // const id=req.url.split('/')[2];
        // const pid = recipe.filter((pid)=>pid.id===(+id));
        // console.log(pid);
        res.end("Post Request");
    }
     // case '/products':
        //     res.setHeader('Content-Type','text/html')
        //     let ans = resul1t.replace('**Hello world**',recipe.name).replace('**id**',recipe.id);
        //     console.log(recipe.name)
        //     res.end(ans);
        //     break;
    switch(req.url){
        case '/':
            res.end("hello");
            break;
        case '/api':
            res.setHeader('Content-Type','application/json')
            res.end(JSON.stringify(result));
            break;
        default:
            res.writeHead(404);
            res.end();

    }
    console.log("server started");
    
    // res.setHeader('Content-Type','text/html')
    // res.end(JSON.stringify(data))
    // res.end(result)
})
const server2 = http.createServer((req,res)=>{
    res.end("Server 2 running");
})

server.listen(8080);
server1.listen(8083)
server2.listen(8081);
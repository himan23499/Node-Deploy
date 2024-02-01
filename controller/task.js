const mongoose = require('mongoose')
const Modal = require('../model/task')
const tasks = Modal.Task;


exports.createTask=async(req,res)=>{
    try{
    const task = new tasks(req.body);
    task.save();
    res.status(201).json(task)
    }catch(err){
        res.status(400).json(err);
    }
}
exports.getAllTask=async(req,res)=>{
    const task  = await tasks.find();
    res.json(task);
}
exports.getTask=async(req,res)=>{
    const id = req.params.id;
    const task = await tasks.findById(id);
    res.json(task)
}
exports.updateTask= async(req,res)=>{
    const id = req.params.id;
    const task = await tasks.findByIdAndUpdate({_id:id},req.body,{new:true})
    res.json(task)
}

exports.replaceTask=async(req,res)=>{
    const id = req.params.id;
    const task = await tasks.findOneAndReplace({_id:id},req.body,{new:true})
    res.json(task)
}
exports.deleteTask=async(req,res)=>{
    const id = req.params.id;
    const task = await tasks.findOneAndDelete({_id:id})
    res.json(task)
}
const mongose = require('mongoose');
const {Schema} = mongose;


const taskSchema = new Schema({
"title":{type:String,required:true},
"status":{type:Boolean,required:true},
"date":{type:Date,default:new Date()}
})

exports.Task  = mongose.model("task",taskSchema);
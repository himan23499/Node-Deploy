const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema
const addressSchema = new Schema({
    pincode:{type:Number,required:true},
    street:{type:String,required:true},
    phone:{type:Number,maxlength:10}
})
//Below is just a Collectionconfiguration from which we will create a Modal 
const userSchema = new Schema({
   
name: {type:String,required:true},
ingredients: [String],
instructions: [String],
prepTimeMinutes: {type:Number,max:[15,"Prep time too long"],default:5},
cookTimeMinutes: {type:Number,max:[120,"Prep time too long"]},
servings: Number,
difficulty: {type:String,default:'medium'},
cuisine: {type:String,default:'Indian'},
caloriesPerServing: Number,
tags: [String],
userId: Number,
image: String,
rating: {type:Number,default:0},
reviewCount: {type:Number,min:[0,'review too low'],max:[5,'review too high'],default:0},
mealType: [String],
address:addressSchema
});
//   images:[String]
  //below we are creating a Model and the product model is created with productSchema.
  exports.User = mongoose.model('users', userSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema
//Below is just a Collectionconfiguration from which we will create a Modal 
const productSchema = new Schema({
    title: {type:String,required:true,unique:true}, // String is shorthand for {type: String}
    price: {type:Number,min:[1,"wrong price"]},
    discountPercentage:{type:Number,min:[0,'wrong min discount'],max:[50,'discount greater than 50']},
    quantity:{type:Number,required:true},
    discountedPrice: {type:Number,required:true},
    category: {type:String,required:true},
    thumbnail:{type:String,required:true},
    
  });
//   images:[String]
  //below we are creating a Model and the product model is created with productSchema.
  exports.Product = mongoose.model('product', productSchema);

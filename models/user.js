var express=require('express');
var mongoose=require('mongoose');
var Schema = mongoose.Schema
mongoose.connect('mongodb+srv://Utsav:<password>@cluster0.9xtw8o5.mongodb.net/?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true  })
 
const UserSchema=new Schema({

       name:{
            type:String,
            required:true,
            trim: true
        },
        email:{
            type:String,
            required:true,
            trim: true
        }, 
        username:{
            type:String,
            required:true,
            trim: true
        },
        password:{
            type:String,
            required:true,
            trim: true,
            
        },
        admin:{
            type:Number
        },
        
});
module.exports = UserSchema;

// var User=mongoose.exports=mongoose.model('User',UserSchema);
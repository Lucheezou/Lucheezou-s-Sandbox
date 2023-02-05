const mongoose = require("mongoose");
const schema = mongoose.Schema

let todo = new schema({

name : {
    type: String,
    unique: true,
    required: true
},

todolist : Array

})

todo.methods.hello = function hello (){
    console.log("hello im " + this.name);
}

let model = mongoose.model("todo",todo);
module.exports = model;

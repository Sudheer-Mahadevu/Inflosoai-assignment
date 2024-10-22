const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        minlength : [4,"Name should have atleast 4 characters"],
        match: [/^[a-zA-Z\s]*$/g, "Name should contain only alphabets and spaces."],
    },

    email : {
        type : String,
        required : true,
        unique : true,
        match :  [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Enter a valid email",
          ]
    },

    password:{
        type: String,
        required : true,
        minlength : [7,"Password should contain atleast 7 characters"],
        maxlength : [15,"Password exceeded length"]
    }
})

const User = mongoose.model('User',userSchema)
 module.exports = User;
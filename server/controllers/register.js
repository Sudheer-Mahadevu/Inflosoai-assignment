const User = require("../Model/user")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const register = async function (req, res){
    
    // Find if a user with the same email or name already exits
    let  query = await User.findOne({email : req.body.email })
    if(query != null) return res.status(401).send({data : "user email already exists"})
    
    query = await User.findOne({name : req.body.name })
    if(query != null) return res.status(401).send({data : "user name already exists"})
    
    bcrypt.hash(req.body.password,12,(err,passwordHash)=>{
        User.create({
        name : req.body.name,
        email : req.body.email,
        password: passwordHash 
        }) // error handling not able to insert
    }
    )
    

    // Generate JWT
    const token = jwt.sign(
        {name: req.body.name, email : req.body.email}, // or other intendent info can be added in payload
        process.env.JWT_SECRET_KEY,{
            expiresIn: 86400 //24 hr
        }
    )

    res.status(200).send({
        auth : true,
        email : req.body.email,
        jwt_token : token
    })

}

module.exports = register;
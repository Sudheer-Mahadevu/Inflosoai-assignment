const User = require("../Model/user")
const jwt = require('jsonwebtoken')

const register = async function (req, res){
    
    // Find if a user with the same email or name already exits
    let  query = await User.findOne({email : req.body.email })
    if(query != null) return res.status(402).send({data : "user email already exists"})
    
    query = await User.findOne({email : req.body.namel })
    if(query != null) return res.status(402).send({data : "user name already exists"})

    User.create({
        name : req.body.name,
        email : req.body.email,
        password: req.body.password // TODO : This has to be hashed and stored
    })

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
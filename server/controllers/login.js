const User = require('../Model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const login = async function(req,res){
    const query = await User.findOne({email : req.body.email});

    if(query == null) return res.status(404).send({data: "No user found"})
    
    const passwordsMatch = await bcrypt.compare(req.body.password,query.password)
    if(!passwordsMatch){
        return res.status(401).send({data: "Passwords donot match"})
    }

    // Generate JWT
    const token = jwt.sign(
        {name: query.name, email : query.email}, // or other intendent info can be added in payload
        process.env.JWT_SECRET_KEY,{
            expiresIn: 86400 //24 hr
        }
    )

    res.status(200).send({
        auth : true,
        email : query.email,
        jwt_token : token
    })
}

module.exports = login;
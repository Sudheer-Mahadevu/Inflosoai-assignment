const User = require("../Model/user")

const register = async function (req, res){
    
    // Find if a user with the same email or name already exits
    const  query = await User.findOne({email : req.body.email })
    console.log(query)
    if(query != null) return res.status(402).send({data : "user email already exists"})
    
    query = await User.findOne({email : req.body.namel })
    if(query != null) return res.status(402).send({data : "user name already exists"})

    User.create({
        name : req.body.name,
        email : req.body.email,
        password: req.body.password // TODO : This has to be hashed and stored
    })

    res.status(200).send({name : req.body.name}) // should JWT be sent?
}

module.exports = register;
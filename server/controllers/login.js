const User = require('../Model/user')

const login = async function(req,res){
    const query = await User.findOne({email : req.body.email});

    if(query == null) return res.status(404).send({data: "No user found"})
    
    if(query.password != req.body.password){
        return res.send({data: "Passwords donot match"})
    }

    res.status(200).send({data:"successfully logged in"})
}

module.exports = login;
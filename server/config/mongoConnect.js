const mongoose = require('mongoose');
const db = process.env.DATABASE

mongoose.connect(db)
    .then(()=> console.log("MONGODB connection success"))
    .catch((err) =>{
        console.log("MONGODB connection falied",err)
    })

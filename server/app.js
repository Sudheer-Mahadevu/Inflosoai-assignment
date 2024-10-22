const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config();
const register = require("./controllers/register")
const login = require("./controllers/login")

const port = process.env.PORT;
console.log(port)

require("./config/mongoConnect")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))

app.post('/register',register)
app.post('/login',login)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
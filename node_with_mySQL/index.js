const express = require('express')
const app = express()
const port = 5000;
var Sql= require("./model/connection");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
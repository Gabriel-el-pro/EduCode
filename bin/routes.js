express = require('express')
const app = express()
const controller =require("./Controller")

app.get('/',function(req, res){
  res.send('Hello World!')
})

app.get('/usuario',function(req, res){
    let usuarios=[
        {name:"Gabriel",contrasena:"dsfhsfdsdjjs"},
        {name:"Pedro Florez",contrasena:"dsfhsfdsdjjs"}
]  
  })

  exports.app=app;
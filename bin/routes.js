const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const path = require('path');
const mongoose = require('mongoose');
//const morgan = require('morgan');
app.use(bodyParser.json());
//midware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

const { controller } = require("./Controller")
app.get("/", (req, res) => {
  res.send("Hola vida");
});

//creamos la ruta raiz para enviar un mensaje de bienvenida con la version
app.get("/version", (req, res) => {
  //retornamos un mensaje
  res.send({ version: "1.0.0" });
});




app.post("/usuario", function(req, res) {
  let { user } = req.body;
  controller.setUsuario(usuario, res);
});

//creamos la ruta users que deberá traer todos los usuarios
app.get("/usuario", (req, res) => {
  //llamamos el metodo getUser del objeto controller, este se encarga de buscar todos los usuarios
  //recibe por parametros req que es igual a la consulta request(consulta) y el res que equivale al response(respuesta)
  controller.getUsuarios(req, res);
});

//Traer a un usuario por su id
app.get("/usuario/:id", function(req, res) {
  let { id } = req.params;
  controller.getUsuario(id, res);
});

//Actualizar a un usuario por su id
app.put("/usuario/:id", function(req, res) {
  let user = req.body.user;
  user.id = req.params.id;
  controller.updateUsuarios(user, res);
});

//Eliminar a un usuario por su id
app.delete("/usuario/:id", function(req, res) {
  let { id } = req.params;
  controller.deleteUsuarios(id, res);
});



//Agregar a una administrador funciona
app.post("/docentes", function(req, res) {
  let { docente } = req.body;
  controller.setDocentes(docente, res);
});

//creamos la ruta users que deberá traer todos los estudiantes
app.get("/docentes", (req, res) => {
  //llamamos el metodo getEstudiante del objeto controller, este se encarga de buscar todos los usuarios
  //recibe por parametros req que es igual a la consulta request(consulta) y el res que equivale al response(respuesta)
  controller.getDocentes(req, res);
});

//Traer a un asministrador por su id
app.get("/docentes/:id", function(req, res) {
  let { id } = req.params;
  controller.getDocente(id, res);
});

//Actualizar a un estudiante por su id
app.put("/docentes/:id", function(req, res) {
  let docente = req.body.administrador;
  docente.id = req.params.id;
  controller.updateDocente(docente, res);
});

//Eliminar a un estudiante por su id
app.delete("/docentes/:id", function(req, res) {
  let { id } = req.params;
  controller.deleteDocente(id, res);
});



app.post("/grado", function(req, res) {
  let { grado } = req.body;
  controller.setGrado(grado, res);
});


//creamos la ruta users que deberá traer todos los grados
app.get("/grado", (req, res) => {
  //llamamos el metodo getEstudiante del objeto controller, este se encarga de buscar todos los usuarios
  //recibe por parametros req que es igual a la consulta request(consulta) y el res que equivale al response(respuesta)
  controller.getGrados(req, res);
});

//Traer a un grados por su id
app.get("/grado/:id", function(req, res) {
  let { id } = req.params;
  controller.getGrado(id, res);
});

//Actualizar a un grado por su id
app.put("/grado:id", function(req, res) {
  let grado = req.body.grado;
  grado.id = req.params.id;
  controller.updateGrado(grado, res);
});

//Eliminar a un estudiante por su id
app.delete("/grado/:id", function(req, res) {
  let { id } = req.params;
  controller.deletGrado(id, res);
});






/*app.get('/usuario',function(req, res){
   /* let usuarios=[
        {name:"Gabriel",contrasena:"dsfhsfdsdjjs"},
        {name:"Pedro Florez",contrasena:"dsfhsfdsdjjs"}
]  
res.send(usuarios)*/
//controller.getUsuarios(res);
 // })

  exports.app=app;
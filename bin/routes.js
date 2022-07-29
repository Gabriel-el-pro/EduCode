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



app.post("/actividades", function(req, res) {
  let { actividad } = req.body;
  controller.setActividad(actividad, res);
});

//creamos la ruta users que deberá traer todos los estudiantes
app.get("/actividades", (req, res) => {
  //llamamos el metodo getEstudiante del objeto controller, este se encarga de buscar todos los usuarios
  //recibe por parametros req que es igual a la consulta request(consulta) y el res que equivale al response(respuesta)
  controller.getActividades(req, res);
});

//Traer a un Estudiante por su id
app.get("/actividades/:id", function(req, res) {
  let { id } = req.params;
  controller.getActividad(id, res);
});

//Actualizar a un estudiante por su id
app.put("/actividad:id", function(req, res) {
  let actividad = req.body.actividad;
  actividad.id = req.params.id;
  controller.updateActividad(actividad, res);
});

//Eliminar a un estudiante por su id
app.delete("/actividad/:id", function(req, res) {
  let { id } = req.params;
  controller.deleteActividad(id, res);
});

app.post("/evaluaciones", function(req, res) {
  let { estudiante } = req.body;
  controller.setEvaluacion(evaluacion, res);
});

//creamos la ruta users que deberá traer todos los estudiantes
app.get("/evaluaciones", (req, res) => {
  //llamamos el metodo getEstudiante del objeto controller, este se encarga de buscar todos los usuarios
  //recibe por parametros req que es igual a la consulta request(consulta) y el res que equivale al response(respuesta)
  controller.getEvaluaciones(req, res);
});

//Traer a un Estudiante por su id
app.get("/evaluaciones/:id", function(req, res) {
  let { id } = req.params;
  controller.getevaluacion(id, res);
});

//Actualizar a un estudiante por su id
app.put("/evaluacion/:id", function(req, res) {
  let evaluacion = req.body.evaluacion;
  evaluacion.id = req.params.id;
  controller.updateEvaluacion(evaluacion, res);
});

//Eliminar a un estudiante por su id
app.delete("/evaluacion/:id", function(req, res) {
  let { id } = req.params;
  controller.deleteEvaluacion(id, res);
});

app.post("/estudiantes", function(req, res) {
  let { estudiante } = req.body;
  controller.setEstudiante(estudiante, res);
});

//creamos la ruta users que deberá traer todos los estudiantes
app.get("/estudiantes", (req, res) => {
  //llamamos el metodo getEstudiante del objeto controller, este se encarga de buscar todos los usuarios
  //recibe por parametros req que es igual a la consulta request(consulta) y el res que equivale al response(respuesta)
  controller.getEstudiantes(req, res);
});

//Traer a un Estudiante por su id
app.get("/estudiantes/:id", function(req, res) {
  let { id } = req.params;
  controller.getestudiante(id, res);
});

//Actualizar a un estudiante por su id
app.put("/estudiantes/:id", function(req, res) {
  let estudiante = req.body.estudiante;
  estudiante.id = req.params.id;
  controller.updateEstudiante(estudiante, res);
});

//Eliminar a un estudiante por su id
app.delete("/estudiantes/:id", function(req, res) {
  let { id } = req.params;
  controller.deleteEstudiante(id, res);
});


app.post("/personas", function(req, res) {
  let { persona } = req.body;
  controller.setPersona(evaluacion, res);
});

//creamos la ruta users que deberá traer todos los estudiantes
app.get("/personas", (req, res) => {
  //llamamos el metodo getEstudiante del objeto controller, este se encarga de buscar todos los usuarios
  //recibe por parametros req que es igual a la consulta request(consulta) y el res que equivale al response(respuesta)
  controller.getPersonas(req, res);
});

//Traer a un Estudiante por su id
app.get("/personas/:id", function(req, res) {
  let { id } = req.params;
  controller.getPersona(id, res);
});

//Actualizar a un estudiante por su id
app.put("/persona/:id", function(req, res) {
  let persona = req.body.persona;
  persona.id = req.params.id;
  controller.updatePersona(persona, res);
});

//Eliminar a un estudiante por su id
app.delete("/persona/:id", function(req, res) {
  let { id } = req.params;
  controller.deletePersona(id, res);
});

app.post("/temas", function(req, res) {
  let { tema } = req.body;
  controller.setTemas(tema, res);
});

//creamos la ruta users que deberá traer todos los usuarios
app.get("/temas", (req, res) => {
  //llamamos el metodo getUser del objeto controller, este se encarga de buscar todos los usuarios
  //recibe por parametros req que es igual a la consulta request(consulta) y el res que equivale al response(respuesta)
  controller.getTemas(req, res);
});

//Traer a un usuario por su id
app.get("/temas/:id", function(req, res) {
  let { id } = req.params;
  controller.getTema(id, res);
});

//Actualizar a un usuario por su id
app.put("/temas/:id", function(req, res) {
  let tema = req.body.user;
  tema.id = req.params.id;
  controller.updateTema(tema, res);
});

//Eliminar a un usuario por su id
app.delete("/temas/:id", function(req, res) {
  let { id } = req.params;
  controller.deleteTema(id, res);
});


/*app.get('/usuario',function(req, res){
   /* let usuarios=[
        {name:"Gabriel",contrasena:"dsfhsfdsdjjs"},
        {name:"Pedro Florez",contrasena:"dsfhsfdsdjjs"}
]  
res.send(usuarios)*/
//controller.getUsuarios(res);
 // })

 
app.post("/subtemas", function(req, res) {
  let { subtema } = req.body;
  controller.setSubtemas(subtema, res);
});

//creamos la ruta users que deberá traer todos los usuarios
app.get("/subtemas", (req, res) => {
  //llamamos el metodo getUser del objeto controller, este se encarga de buscar todos los usuarios
  //recibe por parametros req que es igual a la consulta request(consulta) y el res que equivale al response(respuesta)
  controller.getSubtemas(req, res);
});

//Traer a un usuario por su id
app.get("/subtemas/:id", function(req, res) {
  let { id } = req.params;
  controller.getSubtema(id, res);
});

//Actualizar a un usuario por su id
app.put("/subtemas/:id", function(req, res) {
  let subtema = req.body.user;
  subtema.id = req.params.id;
  controller.updateSubtema(subtema, res);
});

//Eliminar a un usuario por su id
app.delete("/subtemas/:id", function(req, res) {
  let { id } = req.params;
  controller.deleteSubtema(id, res);
});


  exports.app=app;
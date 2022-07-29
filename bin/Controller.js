const mongoose = require("mongoose");
const usuario = require("./modals/usuarios");
const actividad = require("./modals/actividades");
const docente = require("./modals/docentes");
const estudiante = require("./modals/estudiantes");
const evaluacion = require("./modals/evaluacion");
const grado = require("./modals/grado");
const persona = require("./modals/persona");
const subtema = require("./modals/subtemas");
const tema = require("./modals/tema");
class Controller{
    constructor(){
       this.connect();
    }
    async connect(){
        try{
          await mongoose.connect(
           "mongodb://educode:Daniel20001@ac-lnbjbly-shard-00-00.emnuwj4.mongodb.net:27017,ac-lnbjbly-shard-00-01.emnuwj4.mongodb.net:27017,ac-lnbjbly-shard-00-02.emnuwj4.mongodb.net:27017/Software?ssl=true&replicaSet=atlas-tewh7t-shard-0&authSource=admin&retryWrites=true&w=majority",
           // "mongodb+srv://educode:Daniel20001@dcasarrubia77.emnuwj4.mongodb.net/Software?retryWrites=true&w=majority",
          {useNewUrlparser:true}
            );
            console.log("Conectados a la BD")
        } catch(e){
        console.error(e)
        }
    }
   
   
   

    getUsuarios(){
      //en el modelo User se ejecuta el find sin ninguna condicion...
      Usuarios.find({}, (err, usuarios)=>{
          //en caso de haberse presentado un error se ejecuta el error
          if(err) throw err;
          //de lo contrario se retorna un objeto con todos los resultados
          res.send( { allUsers : usuarios } );
      })
  }
  
  setUsuario(user, res) {
      // Se recibe el nuevo usuario en la variable user y se crea a partir del modelo
      Usuario.create(usuario, function(err, newUsuarios) {
          // sihay error se reporta
          if (err) throw err;
          // se retorna la informacion con el nuevo usuario creado
          res.send({ status: 200, nU: newUsuarios });
      });
  }
  
  //metodo para buscar todos los usuarios
  getUsuarios(req, res) {
      //en el modelo User se ejecuta el find sin ninguna condicion...
      usuario.find({}, (err, usuarios) => {
          //en caso de haberse presentado un error se ejecuta el error
          if (err) throw err;
          //de lo contrario se retorna un objeto con todos los resultados
          res.send({ allUsuarios: usuarios });
      });
  }
  
  getUsuario(id, res) {
      //en el modelo User se ejecuta el find sin ninguna condicion...
      Usuario.find({ _id: id }, (err, usuario) => {
          //en caso de haberse presentado un error se ejecuta el error
          if (err) throw err;
          //de lo contrario se retorna un objeto con todos los resultados
          res.send({ Usuarios: usuario });
      });
  }
  
  updateUsuario(usuario, res) {
      //optenemos los campos que queremos actualizar
      let { id, nombre_usuario, password } = usuario;
      //actualizamos teniendo en cuenta una condicion con el operador $set
      //https://docs.mongodb.com/manual/reference/operator/update/set/
      Usuario.updateOne(
          { _id: id },
          { $set: { nombre_usuario:nombre_usuario, contrasena: password } }
      )
          .then(rawResponse => {
              res.send({ message: "Usuarios updated", raw: rawResponse });
          })
          .catch(err => {
              if (err) throw err;
          });
  }
  
  deleteUsuario(id, res) {
      Usuario.deleteOne({ _id: id }, function(err) {
          if (err) throw err;
          res.send({ message: "User has been deleted" });
      });
  }


  getDocente(){
    //en el modelo Administrador se ejecuta el find sin ninguna condicion...
    Docente.find({}, (err, docentes)=>{
        //en caso de haberse presentado un error se ejecuta el error
        if(err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send( { allDocentes : docentes } );
    })
}

setDocente(docente, res) {
    Docente.create(docente, function(err, newDocente) {
        if (err) throw err;
        // se retorna la informacion con el nuevo usuario creado
        res.send({ status: 200, nA: newDocente });
    }); 
}

//metodo para buscar todos los usuarios
getDocentes(req, res) {
   
    docente.find({}, (err, docentes) => {
     
        if (err) throw err;

        res.send({ alldocente: docentes});
    });
}

getDocente(id, res) {
    Docente.find({ _id: id }, (err, docente) => {
        if (err) throw err;
        res.send({ Docentes: docente });
    });
}

updateDocente(docente, res) {

    let { id, id_persona,} = docente;
    //https://docs.mongodb.com/manual/reference/operator/update/set/
    docente.updateOne(
        { _id: id },
        { $set: { id_persona: id_persona, } }
    )
        .then(rawResponse => {
            res.send({ message: "docente updated", raw: rawResponse });
        })
        .catch(err => {
            if (err) throw err;
        });
}

deleteDocente(id, res) {
    Docente.deleteOne({ _id: id }, function(err) {
        if (err) throw err;
        res.send({ message: "Docente has been deleted" });
    });
}



getGrado(){
    
  Grado.find({}, (err, grados)=>{

      if(err) throw err;

      res.send( { allGrados : grados } );
  })
}

setGrado(grado, res) {

  Grado.create(grado, function(err, newGrado) {
  
      if (err) throw err;

      res.send({ status: 200, nA: newGrado });
  }); 
}


getGrados(req, res) {
 
  grado.find({}, (err, grados) => {

      if (err) throw err;

      res.send({ allgrados: grados });
  });
}

getGrado(id, res) {

  Grado.find({ _id: id }, (err, grado) => {

      if (err) throw err;

      res.send({ Grado: grado });
  });
}

updateGrado(grado, res) {

  let { id, grupo, } = grupo;

  //https://docs.mongodb.com/manual/reference/operator/update/set/
  grado.updateOne(
      { _id: id },
      { $set: { grupo: grupo, } }
  )
      .then(rawResponse => {
          res.send({ message: "grado updated", raw: rawResponse });
      })
      .catch(err => {
          if (err) throw err;
      });
}

deleteGrado(id, res) {
  Grado.deleteOne({ _id: id }, function(err) {
      if (err) throw err;
      res.send({ message: "Grado has been deleted" });
  });
}


getActividad(){
    //en el modelo User se ejecuta el find sin ninguna condicion...
    Actividad.find({}, (err, actividades)=>{
        //en caso de haberse presentado un error se ejecuta el error
        if(err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send( { allActividades : actividades } );
    })
}

setActividad(actividad, res) {
    // Se recibe el nuevo usuario en la variable user y se crea a partir del modelo
    Actividad.create(actividad, function(err, newActividad) {
        // sihay error se reporta
        if (err) throw err;
        // se retorna la informacion con el nuevo usuario creado
        res.send({ status: 200, nA: newActividad });
    }); 
}

//metodo para buscar todos los usuarios
getActividades(req, res) {
    //en el modelo User se ejecuta el find sin ninguna condicion...
    actividad.find({}, (err, actividades) => {
        //en caso de haberse presentado un error se ejecuta el error
        if (err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send({ allactividades: actividades });
    });
}

getActividad(id, res) {
    //en el modelo User se ejecuta el find sin ninguna condicion...
    Actividad.find({ _id: id }, (err, actividad) => {
        //en caso de haberse presentado un error se ejecuta el error
        if (err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send({ Actividad: actividad });
    });
}

updateActividad(actividad, res) {
    //optenemos los campos que queremos actualizar
    let { id, id_docente, id_grado, url_icono } = actividad;
    //actualizamos teniendo en cuenta una condicion con el operador $set
    //https://docs.mongodb.com/manual/reference/operator/update/set/
    actividad.updateOne(
        { _id: id },
        { $set: { id_docente: id_docente, id_grado: id_grado, url_icono } }
    )
        .then(rawResponse => {
            res.send({ message: "actividad updated", raw: rawResponse });
        })
        .catch(err => {
            if (err) throw err;
        });
}

deleteActividad(id, res) {
    Actividad.deleteOne({ _id: id }, function(err) {
        if (err) throw err;
        res.send({ message: "Actividad has been deleted" });
    });
}


getEvaluacion(){
    //en el modelo User se ejecuta el find sin ninguna condicion...
    Evaluacion.find({}, (err, evaluaciones)=>{
        //en caso de haberse presentado un error se ejecuta el error
        if(err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send( { allEvaluaciones : evaluaciones } );
    })
}

setEvaluacion(evaluacion, res) {
    // Se recibe el nuevo usuario en la variable user y se crea a partir del modelo
    Evaluacion.create(evaluacion, function(err, newEvaluacion) {
        // sihay error se reporta
        if (err) throw err;
        // se retorna la informacion con el nuevo usuario creado
        res.send({ status: 200, nEv: newEvaluacion });
    }); 
}

//metodo para buscar todos los usuarios
getEvaluaciones(req, res) {
    //en el modelo User se ejecuta el find sin ninguna condicion...
    evaluacion.find({}, (err, evaluaciones) => {
        //en caso de haberse presentado un error se ejecuta el error
        if (err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send({ allEvaluaciones: evaluaciones });
    });
}

getEvaluacion(id, res) {
    //en el modelo User se ejecuta el find sin ninguna condicion...
    Evaluacion.find({ _id: id }, (err, evaluacion) => {
        //en caso de haberse presentado un error se ejecuta el error
        if (err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send({ Evaluacion: evaluacion });
    });
}

updateEvaluacion(evaluacion, res) {
    //optenemos los campos que queremos actualizar
    let { id, id_actividad,} = evaluacion;
    //actualizamos teniendo en cuenta una condicion con el operador $set
    //https://docs.mongodb.com/manual/reference/operator/update/set/
    evaluacion.updateOne(
        { _id: id },
        { $set: { id_actividad: id_actividad, } }
    )
        .then(rawResponse => {
            res.send({ message: "Evaluacion  updated", raw: rawResponse });
        })
        .catch(err => {
            if (err) throw err;
        });
}

deleteEvaluacion(id, res) {
    Evaluacion.deleteOne({ _id: id }, function(err) {
        if (err) throw err;
        res.send({ message: "evaluacion has been deleted" });
    });
}


getEstudiante(){
    //en el modelo User se ejecuta el find sin ninguna condicion...
    Estudiante.find({}, (err, estudiantes)=>{
        //en caso de haberse presentado un error se ejecuta el error
        if(err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send( { allEstudiantes : estudiantes } );
    })
}

setEstudiante(estudiante, res) {
    // Se recibe el nuevo usuario en la variable user y se crea a partir del modelo
    Estudiante.create(estudiante, function(err, newEstudiante) {
        // sihay error se reporta
        if (err) throw err;
        // se retorna la informacion con el nuevo usuario creado
        res.send({ status: 200, nE: newEstudiante });
    }); 
}

//metodo para buscar todos los usuarios
getEstudiantes(req, res) {
    //en el modelo User se ejecuta el find sin ninguna condicion...
    estudiante.find({}, (err, estudiantes) => {
        //en caso de haberse presentado un error se ejecuta el error
        if (err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send({ allestudiantes: estudiantes });
    });
}

getEstudiante(id, res) {
    //en el modelo User se ejecuta el find sin ninguna condicion...
    Estudiante.find({ _id: id }, (err, estudiante) => {
        //en caso de haberse presentado un error se ejecuta el error
        if (err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send({ Estudiante: estudiante });
    });
}

updateEstudiante(estudiante, res) {
    //optenemos los campos que queremos actualizar
    let { id, id_persona, id_grado, id_actividades } = estudiante;
    //actualizamos teniendo en cuenta una condicion con el operador $set
    //https://docs.mongodb.com/manual/reference/operator/update/set/
    estudiante.updateOne(
        { _id: id },
        { $set: { id_persona: id_persona, id_grado: id_grado, id_actividades:id_actividades } }
    )
        .then(rawResponse => {
            res.send({ message: "Estudiante updated", raw: rawResponse });
        })
        .catch(err => {
            if (err) throw err;
        });
}

deleteEstudiante(id, res) {
    Estudiante.deleteOne({ _id: id }, function(err) {
        if (err) throw err;
        res.send({ message: "estudiante has been deleted" });
    });
}

getPersona(){
    //en el modelo User se ejecuta el find sin ninguna condicion...
    Persona.find({}, (err, personas)=>{
        //en caso de haberse presentado un error se ejecuta el error
        if(err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send( { allPersonas : personas } );
    })
}

setPersona(persona, res) {
    // Se recibe el nuevo usuario en la variable user y se crea a partir del modelo
    Persona.create(persona, function(err, newPersona) {
        // sihay error se reporta
        if (err) throw err;
        // se retorna la informacion con el nuevo usuario creado
        res.send({ status: 200, nP: newPersona });
    }); 
}

//metodo para buscar todos los usuarios
getPersonas(req, res) {
    //en el modelo User se ejecuta el find sin ninguna condicion...
    persona.find({}, (err, personas) => {
        //en caso de haberse presentado un error se ejecuta el error
        if (err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send({ allpersonas: personas });
    });
}

getPersona(id, res) {
    //en el modelo User se ejecuta el find sin ninguna condicion...
    Persona.find({ _id: id }, (err, persona) => {
        //en caso de haberse presentado un error se ejecuta el error
        if (err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send({ Persona: persona });
    });
}

updatePersona(persona, res) {
    //optenemos los campos que queremos actualizar
    let { id, nombre, correo, contacto } = persona;
    //actualizamos teniendo en cuenta una condicion con el operador $set
    //https://docs.mongodb.com/manual/reference/operator/update/set/
    persona.updateOne(
        { _id: id },
        { $set: { nombre: nombre, correo: correo, contacto: contacto} }
    )
        .then(rawResponse => {
            res.send({ message: "Persona updated", raw: rawResponse });
        })
        .catch(err => {
            if (err) throw err;
        });
}

deletePersona(id, res) {
    Persona.deleteOne({ _id: id }, function(err) {
        if (err) throw err;
        res.send({ message: "persona has been deleted" });
    });
}



getTemas(){
    //en el modelo User se ejecuta el find sin ninguna condicion...
    Tema.find({}, (err, temas)=>{
        //en caso de haberse presentado un error se ejecuta el error
        if(err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send( { allTeamas : temas } );
    })
}

setTema(temas, res) {
    // Se recibe el nuevo usuario en la variable user y se crea a partir del modelo
    Tema.create(tema, function(err, newTema) {
        // sihay error se reporta
        if (err) throw err;
        // se retorna la informacion con el nuevo usuario creado
        res.send({ status: 200, nU: newTema });
    });
}

//metodo para buscar todos los usuarios
getTemas(req, res) {
    //en el modelo User se ejecuta el find sin ninguna condicion...
    tema.find({}, (err, temas) => {
        //en caso de haberse presentado un error se ejecuta el error
        if (err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send({ allTemas: temas });
    });
}

getTema(id, res) {
    //en el modelo User se ejecuta el find sin ninguna condicion...
    Tema.find({ _id: id }, (err, tema) => {
        //en caso de haberse presentado un error se ejecuta el error
        if (err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send({ Tema: tema });
    });
}

updateTema(tema, res) {
    //optenemos los campos que queremos actualizar
    let { id, titulo } = tema;
    //actualizamos teniendo en cuenta una condicion con el operador $set
    //https://docs.mongodb.com/manual/reference/operator/update/set/
    Tema.updateOne(
        { _id: id },
        { $set: { titulo: titulo } }
    )
        .then(rawResponse => {
            res.send({ message: "Tema updated", raw: rawResponse });
        })
        .catch(err => {
            if (err) throw err;
        });
}

deleteTema(id, res) {
    Tema.deleteOne({ _id: id }, function(err) {
        if (err) throw err;
        res.send({ message: "Tema has been deleted" });
    });
}











getSubtemas(){
    //en el modelo User se ejecuta el find sin ninguna condicion...
    Subtema.find({}, (err, subtemas)=>{
        //en caso de haberse presentado un error se ejecuta el error
        if(err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send( { allSubteamas : subtemas } );
    })
}

setSubtema(subtemas, res) {
    // Se recibe el nuevo usuario en la variable user y se crea a partir del modelo
    Subtema.create(subtema, function(err, newSubtema) {
        // sihay error se reporta
        if (err) throw err;
        // se retorna la informacion con el nuevo usuario creado
        res.send({ status: 200, nU: newSubtema });
    });
}

//metodo para buscar todos los usuarios
getSubtemas(req, res) {
    //en el modelo User se ejecuta el find sin ninguna condicion...
    subtema.find({}, (err, subtemas) => {
        //en caso de haberse presentado un error se ejecuta el error
        if (err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send({ allSubtemas: subtemas });
    });
}

getSubtema(id, res) {
    //en el modelo User se ejecuta el find sin ninguna condicion...
    Subtema.find({ _id: id }, (err, subtema) => {
        //en caso de haberse presentado un error se ejecuta el error
        if (err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
        res.send({ Subtema: subtema });
    });
}

updateSubtema(tema, res) {
    //optenemos los campos que queremos actualizar
    let { id, titulo } = subtema;
    //actualizamos teniendo en cuenta una condicion con el operador $set
    //https://docs.mongodb.com/manual/reference/operator/update/set/
    Subtema.updateOne(
        { _id: id },
        { $set: { titulo: titulo } }
    )
        .then(rawResponse => {
            res.send({ message: "Subtema updated", raw: rawResponse });
        })
        .catch(err => {
            if (err) throw err;
        });
}

deleteSubtema(id, res) {
    Subtema.deleteOne({ _id: id }, function(err) {
        if (err) throw err;
        res.send({ message: "Subtema has been deleted" });
    });
}
    /*getUsuarios(res){
      usuario.find({},(err, usuarios)=>{
        if(err) throw err;
        res.send(usuarios)
      })
    }*/
}

exports.controller= new Controller()
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

    /*getUsuarios(res){
      usuario.find({},(err, usuarios)=>{
        if(err) throw err;
        res.send(usuarios)
      })
    }*/
}

exports.controller= new Controller()
const mongoose = require("mongoose");
const usuario = require("./modals/usuarios");
class Controller{
    constructor(){
       this.connect();
    }
    async connect(){
        try{
          await mongoose.connect(
            "mongodb+srv://educode:Daniel20001@dcasarrubia77.emnuwj4.mongodb.net/Software?retryWrites=true&w=majority",
          {useNewUrlparser:true}
            );
            console.log("Conectados a la BD")
        } catch(e){
        console.error(e)
        }
    }
    getUsuarios(res){
      usuario.find({},(err, usuarios)=>{
        if(err) throw err;
        res.send(usuarios)
      })
    }
}

exports.controller= new Controller()
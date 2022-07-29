const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usuarioSchema= new Schema({
nombre_usuario:String,
contrasena:String,
persona:{
        type: Schema.Types.ObjectId,
        ref:"persona"
    }
})
var usuario = mongoose.model('usuario',usuarioSchema);
module.exports=usuario;
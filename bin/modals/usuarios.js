const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usuarioSchema= new Schema({
nickname:String,
contrasena:String,
picture:String,
})
var usuario = mongoose.model('usuario',usuarioSchema);
module.exports=usuario;
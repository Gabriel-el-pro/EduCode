const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const actividadesSchema= new Schema({
    ejercicio_1:String,
    ejercicio_2:String,
})
var actividades = mongoose.model('actividades',actividadesSchema);
module.exports=actividades;
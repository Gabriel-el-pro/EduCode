const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const personaSchema= new Schema({
nombre:String,
apellido:String,
correo:String,
    docente:
        {
            type:Schema.Types.ObjectId,
            ref:"docente"
        },
    estudiante:
        {
            type:Schema.Types.ObjectId,
            ref:"estudiante"
        }
})
var persona = mongoose.model('persona',personaSchema);
module.exports=persona;
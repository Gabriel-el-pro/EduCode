const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const docenteSchema= new Schema({
    institucion:String,
    persona:
        {
            type:Schema.Types.ObjectId,
            ref:"persona"
        },
        grado:
        {
            type:Schema.Types.ObjectId,
            ref:"grado"
        }
})
var docente = mongoose.model('docente',docenteSchema);
module.exports=docente;
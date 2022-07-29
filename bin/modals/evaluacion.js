const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const evaluacionSchema= new Schema({
    ejercicio_final:Number,
    subtema:[
        {
            type:Schema.Types.ObjectId,
            ref:"subtema"
        }
    ],
    estudiante:
        {
            type:Schema.Types.ObjectId,
            ref:"estudiante"
        },
        docente:
        {
            type:Schema.Types.ObjectId,
            ref:"docente"
        }
})
var evaluacion = mongoose.model('evaluacion',evaluacionSchema);
module.exports=evaluacion;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const gradoSchema= new Schema({
    nivel:String,
    docente:
        {
            type:Schema.Types.ObjectId,
            ref:"docente"
        }
})
var grado = mongoose.model('grado',gradoSchema);
module.exports =grado;
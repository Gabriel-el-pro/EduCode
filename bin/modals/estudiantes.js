const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const estudianteSchema= new Schema({
    fecha_nacimiento:Date,
    persona:
        {
            type:Schema.Types.ObjectId,
            ref:"persona"
        }
})
var estudiante = mongoose.model('estudiante',estudianteSchema);
module.exports=estudiante;
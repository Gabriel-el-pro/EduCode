const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const temaSchema= new Schema({
    titulo:String,
    docente:[
        {
            type:Schema.Types.ObjectId,
            ref:"docente"
        }
    ],
    estudiante:[
        {
            type:Schema.Types.ObjectId,
            ref:"estudiante"
        }
    ]
})
var tema = mongoose.model('tema',temaSchema);
module.exports=tema;
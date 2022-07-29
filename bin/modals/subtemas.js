const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const subtemasSchema= new Schema({
    titulo:String,
    contenido:String,
    tema:[
        {
            type:Schema.Types.ObjectId,
            ref:"tema"
        }
    ]
})
var subtemas = mongoose.model('subtemas',subtemasSchema);
module.exports=subtemas;
import mongoose from "mongoose";
const { Schema,model,models } = mongoose;
const preinscripcionSchema= new Schema({
    alumno:{
        type:ObjectId,
        ref:'Alumno'
    },
    cronograma:{
        type:ObjectId,
        ref:'Cronograma'
    }
})
export default models.Preinscripcion || model('Preinscripcion',preinscripcionSchema);
import mongoose from "mongoose";
const { Schema,model,models } = mongoose;

const docenteSchema=new Schema({
    persona:{
        type:ObjectId,
        ref:'Persona'
    }
})
export default models.Docente || model('Docente',docenteSchema);
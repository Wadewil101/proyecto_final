import mongoose from "mongoose";
const { Schema,model,models } = mongoose;
const alumnoSchema= new Schema({
    persona:{
        type:ObjectId,
        ref:'Persona'
    }
})
export default models.Alumno || model('Alumno',alumnoSchema);
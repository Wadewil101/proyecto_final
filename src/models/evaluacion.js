import mongoose from "mongoose";
const { Schema,model,models } = mongoose;
const evaluacionSchema=new Schema({
    cronograma:{
        type:ObjectId,
        ref:'Cronograma'
      },
      alumno:{
        type:ObjectId,
        ref:'Alumno'
    }
})
export default models.Evaluacion || model('Evaluacion',evaluacionSchema);
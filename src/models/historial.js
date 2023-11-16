import mongoose from "mongoose";
const { Schema,model,models,ObjectId } = mongoose;

const historialSchema =new Schema({
    fecha_finalizacion:{
        type:Date,
        trim:true,
    },
    nota:{
        type:Number,
        trim:true,
        required:[true,"Lnota es obligatoria"]
    },
    certificado:{
        type:Boolean,
        trim:true,
        unique:true,

    },
    obsevacion:{
        type:String,
        trim:true
    },
    inscripcion:{
        type:ObjectId,
        ref:'Inscripcion'
      },
    
},
{
    timestamps: true
})
export default models.Historial || model('Historial',historialSchema);
import mongoose from "mongoose";
const { Schema,model,models } = mongoose;
const usuarioSchema= new Schema({
    nombre:{
        type:String,
        trim:true,
        required:[true,"se requiere el nombre del usuario"]
    },
    contraseña:{
        type:String,
        unique:true,
        trim:true,
        required:[true,"re sequiere la contraseña"]
    },
    activo:{
        type:Boolean,
        trim:true,
        required:[true,"se requiere el estado del usuario"]
    }
})
export default models.Usuario || model('Usuario',usuarioSchema);
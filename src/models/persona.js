import mongoose from "mongoose";
const { Schema,model,models } = mongoose;
const personaSchema=new Schema({

    nombre:{
        type:String,
        trim:true,
        required:[true,"ingrese el nombre"]
    },
    primer_apellido:{
        type:String,
        trim:true,
        required:[true,"ingrese el apellido paterno "]
    },
    segundo_apellido:{
        type:String,
        trim:true,
        required:[true,"ingrese el apellido materno"]
    },
    fecha_nacimiento:{
        type:String,
        trim:true,
        required:[true,"ingrese la fecha"]

    },
    // ci:{
    //     type:String,
    //     unique:true,
    //     trim:true,
    //     required:[true,"ingrese el CI"]
    // },
    // expedido_ci:{
    //     type:String,
    //     trim:true,
    //     required:[true,"ingrese el expedido"]
    // },
    // genero:{
    //     type:String,
    //     trim:true,
    //     required:[true,"ingrese el genero"]
    // },
    // direccion:{
    //     type:String,
    //     trim:true,
    //     required:[true,"ingrese el genero"]
    // },
    // telefono:{
    //     type:String,
    //     trim:true,
    //     required:[true,"ingrese el primer telefono"]
    // },
    // telefono_2:{
    //     type:String,
    //     trim:true,
    //     required:[true,"ingrese el segundo telefono"]
    // }
})
export default models.Persona || model('Persona',personaSchema);
import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const cursoSchema = new Schema({
  nombre:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"El nombre es obligatorio"]
  },
  logo:{
    type:String,
    trim:true,
    required:[true,"Imagen Obligatoria"],
    default:'#'
  },
  color_hexa:{
    type:String,
    default:true
  },
  costo_personalizado:{
    type:Float32Array,
    default:0
  },
  costo_referencial:{

  },
  eslogan:{
    type:String,


  },
  descripcion:{
    type:Text
  },
  horas_academicas:{
    type:Float32Array,
  },
  horas_reales:{
    type:Float32Array,
  }
},
{
    timestamps:true
}
);

export default models.Curso || model('Curso',cursoSchema);
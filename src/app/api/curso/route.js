import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose'
import cursos from '@/models/curso';
import Cursos from "@/app/curso/page";

export async function GET(){
    try {
        await connectDB();
        const cursos= await Cursos.find();
        return NextResponse.json({
        cursos
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
export async function POST(request){
    try {
        await connectDB();
        const data = await request.json();
        const newCurso = new Cursos(data); 
        const respuesta = await newCurso.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}


export async function DELETE(request,{params}){
    try {
        await connectDB();
        const id= params.id;
        const cursos= await  Cursos.deleteOne({'_id':id});
        return NextResponse.json({
        cursos
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}




export async function PUT(request){
    try {
        await connectDB ();
        const data= await request.json();
  //      const newMateria = new Materias(data);
    //    const respuesta= await newMateria.save(data);
    const cursoUpdated=await Cursos.findByIdAndUpdate(id,data,{new:true});
        return NextResponse.json({
        cursoUpdated
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
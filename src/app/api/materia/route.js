import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Materias from '@/models/materia';

export async function GET(){
    try {
        await connectDB();
        const materias= await Materias.find();
        return NextResponse.json({
        materias
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
        const newMateria = new Materias(data); 
        const respuesta = await newMateria.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
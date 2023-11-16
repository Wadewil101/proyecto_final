import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Dodentes from '@/models/docente';

export async function GET(){
    try {
        await connectDB();
        const dodentes= await Dodentes.find();
        return NextResponse.json({
            dodentes
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
        const newDodente= new Dodentes(data); 
        const respuesta = await newDodente.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";
import Asistencias from "@/models/asistencia";

export async function GET (request,{params}){

    try {
        await connectDB();
        const asistenciasFound=await Areas.findById(params.id);
        if(!asistenciasFound) return NextResponse.json({
            message:"areas not found"},
            {status:404}
        )
        return NextResponse.json(asistenciasFound);
    } catch (error) {
        return NextResponse.json(error.message,{status:404})
    }
}

export async function DELETE (request,{params}){
    try {
        await connectDB();
        const asistenciasDeleted = await Areas.findByIdAndDelete(params.id);
        if(!asistenciasDeleted)
            return NextResponse.json({
        message: 'asistencias not Found'}, {status:404}
        );
        return NextResponse.json(asistenciasDeleted);
    } catch (error) {
        return NextResponse.json(error.message,{status:400})
    }

    return NextResponse.json({
        message:`Eliminando asistencia ${params.id}`,
    });
}

export async function PUT (request,{params}){
    try {
        await connectDB();
        const data = await request.json();
        //console.log(data);
        const asistenciaUpdated = await Areas.findByIdAndUpdate(params.id,data,{new:true});

        return NextResponse.json(asistenciaUpdated);
    } catch (error) {
        return NextResponse.json(error.message,{status:400})
    }
    
}
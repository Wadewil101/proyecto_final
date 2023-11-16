import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";
import Alumnos from "@/models/alumno";

export async function GET (request,{params}){

    try {
        await connectDB();
        const alumnosFound=await Alumnos.findById(params.id);
        if(!alumnosFound) return NextResponse.json({
            message:"areas not found"},
            {status:404}
        )
        return NextResponse.json(alumnosFound);
    } catch (error) {
        return NextResponse.json(error.message,{status:404})
    }
}

export async function DELETE (request,{params}){
    try {
        await connectDB();
        const alumnosDeleted = await Alumnos.findByIdAndDelete(params.id);
        if(!alumnosDeleted)
            return NextResponse.json({
        message: 'areas not Found'}, {status:404}
        );
        return NextResponse.json(alumnosDeleted);
    } catch (error) {
        return NextResponse.json(error.message,{status:400})
    }

    return NextResponse.json({
        message:`Eliminando aluno ${params.id}`,
    });
}

export async function PUT (request,{params}){
    try {
        await connectDB();
        const data = await request.json();
        //console.log(data);
        const alumnoUpdated = await Alumnos.findByIdAndUpdate(params.id,data,{new:true});

        return NextResponse.json(alumnoUpdated);
    } catch (error) {
        return NextResponse.json(error.message,{status:400})
    }
    
}
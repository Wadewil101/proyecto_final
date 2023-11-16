import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";
import Grados from "@/models/grado";

export async function GET (request,{params}){

    try {
        await connectDB();
        const gradosFound=await Grados.findById(params.id);
        if(!gradosFound) return NextResponse.json({
            message:"grados not found"},
            {status:404}
        )
        return NextResponse.json(gradosFound);
    } catch (error) {
        return NextResponse.json(error.message,{status:404})
    }
}

export async function DELETE (request,{params}){
    try {
        await connectDB();
        const gradosDeleted = await Grados.findByIdAndDelete(params.id);
        if(!gradosDeleted)
            return NextResponse.json({
        message: 'grados not Found'}, {status:404}
        );
        return NextResponse.json(gradosDeleted);
    } catch (error) {
        return NextResponse.json(error.message,{status:400})
    }

    return NextResponse.json({
        message:`Eliminando grado ${params.id}`,
    });
}

export async function PUT (request,{params}){
    try {
        await connectDB();
        const data = await request.json();
        //console.log(data);
        const gradoUpdated = await Grados.findByIdAndUpdate(params.id,data,{new:true});

        return NextResponse.json(gradoUpdated);
    } catch (error) {
        return NextResponse.json(error.message,{status:400})
    }
    return NextResponse.json({
        message:`Actualizando grado ${params.id}`,
    });
    
}
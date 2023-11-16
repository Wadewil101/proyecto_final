import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";
import Tipos from "@/models/tipo";

export async function GET (request,{params}){

    try {
        await connectDB();
        const tiposFound=await Tipos.findById(params.id);
        if(!tiposFound) return NextResponse.json({
            message:"tipos not found"},
            {status:404}
        )
        return NextResponse.json(tiposFound);
    } catch (error) {
        return NextResponse.json(error.message,{status:404})
    }
}

export async function DELETE (request,{params}){
    try {
        await connectDB();
        const tiposDeleted = await Tipos.findByIdAndDelete(params.id);
        if(!tiposDeleted)
            return NextResponse.json({
        message: 'tipos not Found'}, {status:404}
        );
        return NextResponse.json(tiposDeleted);
    } catch (error) {
        return NextResponse.json(error.message,{status:400})
    }

    return NextResponse.json({
        message:`Eliminando tipo ${params.id}`,
    });
}

export async function PUT (request,{params}){
    try {
        await connectDB();
        const data = await request.json();
        //console.log(data);
        const tipoUpdated = await Tipos.findByIdAndUpdate(params.id,data,{new:true});

        return NextResponse.json(tipoUpdated);
    } catch (error) {
        return NextResponse.json(error.message,{status:400})
    }
    
}
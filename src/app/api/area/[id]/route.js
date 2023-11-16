import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";
import Areas from "@/models/area";

export async function GET (request,{params}){

    try {
        await connectDB();
        const areasFound=await Areas.findById(params.id);
        if(!areasFound) return NextResponse.json({
            message:"areas not found"},
            {status:404}
        )
        return NextResponse.json(areasFound);
    } catch (error) {
        return NextResponse.json(error.message,{status:404})
    }
}

export async function DELETE (request,{params}){
    try {
        await connectDB();
        const areasDeleted = await Areas.findByIdAndDelete(params.id);
        if(!areasDeleted)
            return NextResponse.json({
        message: 'areas not Found'}, {status:404}
        );
        return NextResponse.json(areasDeleted);
    } catch (error) {
        return NextResponse.json(error.message,{status:400})
    }

    return NextResponse.json({
        message:`Eliminando area ${params.id}`,
    });
}

export async function PUT (request,{params}){
    try {
        await connectDB();
        const data = await request.json();
        //console.log(data);
        const areaUpdated = await Areas.findByIdAndUpdate(params.id,data,{new:true});

        return NextResponse.json(areaUpdated);
    } catch (error) {
        return NextResponse.json(error.message,{status:400})
    }
    
}
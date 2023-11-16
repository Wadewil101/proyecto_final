import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Tipos from "@/models/tipo";
// Content-Type: application/json
export async function GET(){
    try{
        await connectDB();
        const tipos = await Tipos.find();
        return NextResponse.json({
            tipos
        });
    }catch(error){
        return NextResponse.json(error.message,{
            status:400
        })
    }
}

export async function POST(request){
    try{
        await connectDB();
        const data = await request.json();
        const newTipo = new Tipos(data);
        //console.log(data);
        //console.log(newMateria);
       
       
        const savedTipo=await newTipo.save();
        //console.log(savedMateria);
        
        
        return NextResponse.json(savedTipo);
        //return NextResponse.json({message:"POST materia"});
    }catch(error){
        return NextResponse.json(error.message,{
            status:400
        })
    }
    
}





/*
export async function GET(){
    connectDB();
    try{
        const materias = await Materias.find();
        return NextResponse.json({
            materias
        });
    }catch(error){
        return NextResponse.json(error.message,{
            status:400
        })
    }
    
}

export async function POST(request){
    try{
        const data = await request.json();
        const newMateria = new Materias(data);
        const savedMateria=await newMateria.save();
        console.log(savedMateria);
        return NextResponse.json(savedMateria);
    }catch(error){
        return NextResponse.json(error.message,{
            status:400
        })
    }
}
*/
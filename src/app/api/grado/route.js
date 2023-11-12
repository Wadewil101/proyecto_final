import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Grados from "@/models/grado";
// Content-Type: application/json
export async function GET(){
    try{
        await connectDB();
        const grados = await Grados.find();
        return NextResponse.json({
            grados
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
        const newGrado = new Grados(data);
        //console.log(data);
        //console.log(newMateria);
       
       
        const savedGrado=await newGrado.save();
        //console.log(savedMateria);
        
        
        return NextResponse.json(savedGrado);
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
"use client"
import { useState } from "react";

function FormPage() {
    const [newGrado,setNewGrado]=useState({
        nombre:"",
        
    });

    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(newGrado);
        const res= await fetch('/api/grado',{
            method:"POST",
            body:JSON.stringify(newGrado)
        })
        console.log(res);
    }

    const handleChange=(e)=> setNewGrado({...newGrado,[e.target.name]:e.target.value});
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        
        <form onSubmit={handleSubmit}>
        <h1 className="text-white text-center text bg-red-800 border-2 rounded-lg w-full p-4 my-4 " >AGREGANDO GRADO</h1>
            <input type="text" name="nombre" placeholder="Grado" 
                className="bg-gray-800 border-2 rounded-lg w-full p-4 my-4 text-white" 
                onChange={handleChange}
            />
            
            <button className="bg-green-600 hover:bg-green-800 text-white font-bold px-4 py-4 rounded-lg">
                Guardar
            </button>
        </form>

    </div>
  )
}

export default FormPage
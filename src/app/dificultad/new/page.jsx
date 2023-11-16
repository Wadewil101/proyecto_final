"use client"
import { useState } from "react";

function FormPage() {
    const [newDificultad,setNewDificultad]=useState({
        nombre:"",
        
    });

    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(newDificultad);
        const res= await fetch('/api/dificultad',{
            method:"POST",
            body:JSON.stringify(newDificultad)
        })
        console.log(res);
    }

    const handleChange=(e)=> setNewDificultad({...newDificultad,[e.target.name]:e.target.value});
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        
        <form onSubmit={handleSubmit}>
        <h1 className="text-white text-center text bg-red-800 border-2 rounded-lg w-full p-4 my-4 " >AGREGANDO DIFICULTAD</h1>
            <input type="text" name="nombre" placeholder="Dificultad" 
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
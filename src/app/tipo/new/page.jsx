"use client"
import { useState } from "react";

function FormPage() {
    const [newTipo,setNewTipo]=useState({
        nombre:"",
        horas_reales:"",
        
    });

    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(newTipo);
        const res= await fetch('/api/tipo',{
            method:"POST",
            body:JSON.stringify(newTipo)
        })
        console.log(res);
    }

    const handleChange=(e)=> setNewTipo({...newTipo,[e.target.name]:e.target.value});
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        
        <form onSubmit={handleSubmit}>
        <h1 className="text-white text-center text bg-red-800 border-2 rounded-lg w-full p-4 my-4 " >AGREGANDO AREA</h1>
            <input type="text" name="nombre" placeholder="Nombre de area" 
                className="bg-gray-800 border-2 rounded-lg w-full p-4 my-4 text-white" 
                onChange={handleChange}
            />
            <input type="number" name="horas_reales" placeholder="Horas Reales" 
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
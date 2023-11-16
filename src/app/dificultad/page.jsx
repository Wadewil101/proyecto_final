import { connectDB } from "@/libs/mongoose";
import Dificultades from '@/models/dificultad';
import DificultadCard from "../../components/DificultadCard";
import Link from "next/link";

async function loadDificultades(){
    await connectDB();
    const dificultades = await Dificultades.find();
    console.log(dificultades);
    return dificultades;
}

async function HomePage(){
    const dificultades= await loadDificultades();
    return(
        <>
        <div className="m-5">
           <Link href="dificultad/new" className="bg-green-600  hover:bg-green-800 text-white font-bold px-4 py-4 rounded-lg">
                 Nueva Dificultad
           </Link> 
        </div>
        
        
        <div className="grid grid-cols-3 gap-2 ">
            
            {
                dificultades.map(dificultad=>(
                   <DificultadCard 
                        key={dificultad._id} 
                        dificultad={dificultad} 
                    />
                ))
            }
        </div>
        </>
    );
}

export default HomePage;
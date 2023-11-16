import { connectDB } from "@/libs/mongoose";
import Grados from '@/models/grado';
import GradoCard from "../../components/GradoCard";
import Link from "next/link";

async function loadGrados(){
    await connectDB();
    const grados = await Grados.find();
    console.log(grados);
    return grados;
}

async function HomePage(){
    const grados= await loadGrados();
    return(
        <>
        <div className="m-5">
           <Link href="grado/new" className="bg-green-600  hover:bg-green-800 text-white font-bold px-4 py-4 rounded-lg">
                 Nuevo Grado
           </Link> 
        </div>
        
        
        <div className="grid grid-cols-3 gap-2 ">
            
            {
                grados.map(grado=>(
                   <GradoCard 
                        key={grado._id} 
                        grado={grado} 
                    />
                ))
            }
        </div>
        </>
    );
}

export default HomePage;
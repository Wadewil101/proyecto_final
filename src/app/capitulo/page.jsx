import { connectDB } from "@/libs/mongoose";
import Capitulos from '@/models/capitulo';
import CapituloCard from "../../components/CapituloCard";
import Link from "next/link";
import capitulo from "@/models/capitulo";

async function loadCapitulos(){
    await connectDB();
    const capitulos = await Capitulos.find();
    console.log(capitulos);
    return capitulos;
}

async function HomePage(){
    const capitulos= await loadCapitulos();
    return(
        <>
        <div className="m-5">
           <Link href="capitulo/new" className="bg-green-600  hover:bg-green-800 text-white font-bold px-4 py-4 rounded-lg">
                 Nueva Capitulo
           </Link> 
        </div>
        
        
        <div className="grid grid-cols-3 gap-2 ">
            
            {
                capitulos.map(capitulo=>(
                   <CapituloCard 
                        key={capitulo._id} 
                        capitulo={capitulo} 
                    />
                ))
            }
        </div>
        </>
    );
}

export default HomePage;
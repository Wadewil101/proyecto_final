import { connectDB } from "@/libs/mongoose";
import Tipos from '@/models/tipo';
import TipoCard from "../../components/tipoCard";
import Link from "next/link";

async function loadTipos(){
    await connectDB();
    const tipos = await Tipos.find();
    console.log(tipos);
    return tipos;
}

async function HomePage(){
    const tipos= await loadTipos();
    return(
        <>
        <h1>Tipos</h1>
            <div></div><Link href="/">Inicio</Link>
        <div className="m-5">
        
           <Link href="tipo/new" className="bg-green-600  hover:bg-green-800 text-white font-bold px-4 py-4 rounded-lg">
                 Nuevo Tipo
           </Link> 
        </div>
        
        
        <div className="grid grid-cols-3 gap-2 ">
            
            {
                tipos.map(tipo=>(
                   <TipoCard 
                        key={tipo._id} 
                        tipo={tipo} 
                    />
                ))
            }
        </div>
        </>
    );
}

export default HomePage;
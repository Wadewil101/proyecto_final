import { connectDB } from "@/libs/mongoose";
import Areas from '@/models/area';
import AreaCard from "../../components/AreaCard";
import Link from "next/link";

async function loadAreas(){
    await connectDB();
    const areas = await Areas.find();
    console.log(areas);
    return areas;
}

async function HomePage(){
    const areas= await loadAreas();
    return(
        <>
        <h1>Areas</h1>
            <div></div><Link href="/">Inicio</Link>
        <div className="m-5">
        
           <Link href="area/new" className="bg-green-600  hover:bg-green-800 text-white font-bold px-4 py-4 rounded-lg">
                 Nueva Area
           </Link> 
        </div>
        
        
        <div className="grid grid-cols-3 gap-2 ">
            
            {
                areas.map(area=>(
                   <AreaCard 
                        key={area._id} 
                        area={area} 
                    />
                ))
            }
        </div>
        </>
    );
}

export default HomePage;
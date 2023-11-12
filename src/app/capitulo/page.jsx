import { connectDB } from "@/libs/mongoose";
import Capitulo from '@/models/capitulo';
//import UniversidadCard from "../../components/UniversidadCard";

/*async function loadUniversidades(){
    await connectDB();
    const universidades = await Universidad.find();
    console.log(universidades);
    return universidades;
}*/
const fetchCapitulos=()=>{
    return fetch('http://localhost:3000/api/capitulo')
        .then(res=>res.json())
}

async function HomePage(){
    const {capitulos}= await fetchCapitulos();
    return(
        <div className="grid grid-cols-3 gap-2 ">
            {
                capitulos.map(capitulo=>(
                   <capitulosCard 
                        key={capitulo._id} 
                        capitulo={capitulo} 
                    />
                ))
            }
        </div>
    );
}

export default HomePage;
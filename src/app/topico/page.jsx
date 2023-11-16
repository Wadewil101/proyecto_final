import { connectDB } from "@/libs/mongoose";
import Carrera from '@/models/carrera';
//import UniversidadCard from "../../components/UniversidadCard";

/*async function loadUniversidades(){
    await connectDB();
    const universidades = await Universidad.find();
    console.log(universidades);
    return universidades;
}*/
const fetchCarreras=()=>{
    return fetch('http://localhost:3000/api/carrera')
        .then(res=>res.json())
}

async function HomePage(){
    const {carreras}= await fetchCarreras();
    return(
        <div className="grid grid-cols-3 gap-2 ">
            {
                carreras.map(carrera=>(
                   <cursosCard 
                        key={carrera._id} 
                        carrera={carrera} 
                    />
                ))
            }
        </div>
    );
}

export default HomePage;
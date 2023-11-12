import { connectDB } from "@/libs/mongoose";
import Curso from '@/models/curso';
//import UniversidadCard from "../../components/UniversidadCard";

/*async function loadUniversidades(){
    await connectDB();
    const universidades = await Universidad.find();
    console.log(universidades);
    return universidades;
}*/
const fetchCursos=()=>{
    return fetch('http://localhost:3000/api/curso')
        .then(res=>res.json())
}

async function HomePage(){
    const {cursos}= await fetchCursos();
    return(
        <div className="grid grid-cols-3 gap-2 ">
            {
                cursos.map(curso=>(
                   <cursosCard 
                        key={curso._id} 
                        curso={curso} 
                    />
                ))
            }
        </div>
    );
}

export default HomePage;
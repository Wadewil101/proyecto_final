import { connectDB } from "@/libs/mongoose";
import Cursos from '@/models/curso';

async function loadCursos(){
    await connectDB();
    const cursos = await Cursos.find();
    return cursos;
}

async function HomePage(){
    const cursos= await loadCursos();
    return(
        <div>
            {
                cursos.map(curso=>(
                    <div key={curso._id}>
                        <h3>{curso.nombre}</h3>
                        <p>{curso.visible}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default HomePage;
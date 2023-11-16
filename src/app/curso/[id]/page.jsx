import { connectDB } from "@/libs/mongoose";
import Carreras from '@/models/carrera';

async function loadCarreras(){
    await connectDB();
    const carreras = await Carreras.find();
    return carreras;
}

async function HomePage(){
    const carreras= await loadCarreras();
    return(
        <div>
            {
                carreras.map(carrera=>(
                    <div key={carrera._id}>
                        <h3>{carrera.nombre}</h3>
                        <p>{carrera.visible}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default HomePage;
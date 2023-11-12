import { connectDB } from "@/libs/mongoose";
import Capitulos from '@/models/capitulo';

async function loadCapitulos(){
    await connectDB();
    const capitulos = await Capitulos.find();
    return capitulos;
}

async function HomePage(){
    const capitulos= await loadCapitulos();
    return(
        <div>
            {
                capitulos.map(capitulo=>(
                    <div key={capitulo._id}>
                        <h3>{capitulo.nombre}</h3>
                        <p>{capitulo.visible}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default HomePage;
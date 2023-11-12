import Link from "next/link";
import dificultad from "../../models/dificultad";

export const feachDificultades=()=>{
   return fetch('http://localhost:3000/api/dificultad')
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Dificultades(){
    const {dificultades}= await feachDificultades();
    console.log(dificultades);
    return(
        <div>
            <h1>Dificultades</h1>
            <Link href="/">Inicio</Link>
            {
                dificultades.map(dificultad=>(
                    <div  className="bg-gray-700 p-10 mt-5 text-white" key={dificultad._id}>
                        <h1>{dificultad.titulo}</h1>
                    </div>
                ))
            }
        </div>
    )

}
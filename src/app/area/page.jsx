import Link from "next/link";

export const feachAreas=()=>{
   return fetch('http://localhost:3000/api/area')
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Areas(){
    const {areas}= await feachAreas();
    console.log(areas);
    return(
        <div>
            <h1>Areas</h1>
            <Link href="/">Inicio</Link>
            {
                cursos.map(area=>(
                    <div  className="bg-gray-700 p-10 mt-5 text-white" key={area._id}>
                        <h1>{area.titulo}</h1>
                    </div>
                ))
            }
        </div>
    )

}
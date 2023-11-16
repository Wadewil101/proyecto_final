

function CapituloCard({capitulo}) {
  return (
    <div>
        <div className="bg-gray-600 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
            <h1>{capitulo._id}</h1>
            <h2>Titulo: {capitulo.titulo}</h2>
            <h2>{capitulo.curso}</h2>
        </div>
    </div>
  )
}

export default CapituloCard
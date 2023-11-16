

function DificultadCard({dificultad}) {
  return (
    <div>
        <div className="bg-gray-600 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
            <h1>{dificultad._id}</h1>
            <h2>{dificultad.nombre}</h2>
        </div>
    </div>
  )
}

export default DificultadCard
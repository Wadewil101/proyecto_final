

function GradoCard({grado}) {
  return (
    <div>
        <div className="bg-gray-600 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
            <h1>{grado._id}</h1>
            <h2>{grado.nombre}</h2>
        </div>
    </div>
  )
}

export default GradoCard
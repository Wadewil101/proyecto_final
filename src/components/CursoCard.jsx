
function CursosCard({curso}) {
  return (
    <div>
        <div className="bg-gray-600 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
            <h2>{cursos.cursos}</h2>
            <p>{curso._id}</p>
        </div>
    </div>
  )
}

export default CursosCard
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {FontAwesomeIcon} from "@fo"
import {
  faTrashCan,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link"
function TipoCard({tipo}) {
  return (
          <div className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" >
              <h1>{tipo.nombre}</h1>
              <h1>{tipo.horas_reales}</h1>
              <div className="space-between">
                <Link href={`/tipo/${tipo._id}/delete`}>
                  <FontAwesomeIcon width={"2em"} icon={ faTrashCan} />
                </Link>
                <Link href={`/tipo/${tipo._id}/update`}>
                  <FontAwesomeIcon width={"2em"} icon={faPenToSquare} />
                </Link>
              </div>
                            
          </div>

  )
}

export default TipoCard
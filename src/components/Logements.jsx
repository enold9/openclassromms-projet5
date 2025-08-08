import { Link } from 'react-router'
// Import direct du fichier JSON depuis src/data/
import logementsData from '../data/logements.json'

function Logements(){
    return(
            <ul className='card'>
                {logementsData.map((logement, i) =>
                    <li key={logement.id}> {/* Utilisez logement.id au lieu de i pour une meilleure performance */}
                        <Link to={`/logement/${logement.id}`}> {/* Utilisez logement.id au lieu de i */}
                            <span>{logement.title}</span>
                            <img className='img-fit' src={logement.cover} alt={logement.title}/>
                        </Link>
                    </li>
                )}
            </ul>
    )
}

export default Logements
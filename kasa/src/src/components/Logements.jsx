const reponse = await fetch('../../public/logements.json')
const logements = await reponse.json()
import { Link } from 'react-router'


function Logements(){
    return(
            <ul className='card'>
                {logements.map((logement,i)=>
                    <li key={i}>
                        <Link to={`/logement/${i}`}>
                            <span>{logement.title}</span>
                            <img className='img-fit' src={logement.cover}/>
                        </Link>
                    </li>
                )}
            </ul>
    )
}


export default Logements 
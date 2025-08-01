const reponse = await fetch('http://localhost:5173/logements.json')
const logements = await reponse.json()
import { Link } from 'react-router'


function Logements(){
    return(
            <ul className='card'>
                {logements.map((logement,i)=>
                    <Link to={`/logement/${i}`}>
                        <li key={i}>
                            <span>{logement.title}</span>
                            <img src={logement.cover}/>
                        </li>
                    </Link>
                )}
            </ul>
    )
}


export default Logements 
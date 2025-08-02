import { useParams } from 'react-router'
const reponse = await fetch('http://localhost:5173/logements.json')
const logements = await reponse.json()

function Logement(){
    const { pageNumber } = useParams()
    const logementNumber = parseInt(pageNumber)
    const logement = logements[logementNumber]
    return(
        <div className='logement'>
            <img className='caroussel-img' src={logement.pictures[0]} />
            <div>
                <div>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <div>
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} />
                </div>
            </div>
            <div>
                <ul>
                    {logement.tags.map((tag,i)=>
                            <li key={i}>
                                    {tag}
                            </li>
                    )}
                </ul>
                <div>
                    <div>
                        {[...Array(5)].map((star, i)=>
                            i+1>parseInt(logement.rating) ? (
                                <i key={i} className="fa-solid fa-star star star__grey"></i>
                            ) : (
                                <i key={i} className="fa-solid fa-star star star__red"></i>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logement 
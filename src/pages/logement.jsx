import { useParams } from 'react-router'
import { useState } from 'react'
import Propos from '../components/Propos'
import Error from '../components/Error'
// Import direct du fichier JSON depuis src/data/
import logementsData from '../data/logements.json'

function Logement(){
    const { pageNumber } = useParams()
    
    // Maintenant pageNumber contient l'ID du logement (pas l'index)
    // car dans Logements.jsx on utilise logement.id dans le lien
    const logement = logementsData.find(item => item.id === pageNumber)
    
    const [currentImage, setCurrentImage] = useState(0);

    function previousImage() {
        setCurrentImage((prev) => (prev - 1 + logement.pictures.length) % logement.pictures.length);
    }

    function nextImage() {
        setCurrentImage((prev) => (prev + 1) % logement.pictures.length);
    }

    // Si le logement n'existe pas, afficher la page d'erreur 
    if(!logement){
        return <Error />
    }

    return(
        <div className='logement'>
            <div className='caroussel-container'>
                <div className='caroussel-btn-container flexMirror'>
                    <button className='fa-solid fa-chevron-left caroussel-btn' id='prev' onClick={previousImage}></button>
                    <button className='fa-solid fa-chevron-right caroussel-btn' id='nxt' onClick={nextImage}></button>
                </div>
                <span className="caroussel-image-number">{currentImage + 1}/{logement.pictures.length}</span>
                <ul>
                    {logement.pictures.map((picture, i)=>
                        <li key={i} className={`caroussel-img-container${i === currentImage ? ' active' : ''}`}>
                            <img src={picture} className='caroussel-img' alt={`Image ${i + 1} de ${logement.title}`}/>
                        </li>
                    )}
                </ul>
            </div>
            <div className='flexMirror'>
                <div className='logement-container'>
                    <div className='logement-title'>
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <ul className='tags'>
                        {logement.tags.map((tag,i)=>
                                <li key={i}>
                                        {tag}
                                </li>
                        )}
                    </ul>
                </div>
                <div className='logement-container logement-container__host'>
                    <div className='host flexMirror'>
                        <p>{logement.host.name.split(" ")[0]}<br/>
                            {logement.host.name.split(" ")[1]}
                        </p>
                        <div className='host-container'>
                            <img className='img-fit' src={logement.host.picture} alt={logement.host.name} />
                        </div>
                    </div>
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
            <ul className='logement-description'>
                <Propos propos="Description" description={logement.description}/>
                <Propos propos="Equipements" description={logement.equipments}/>
            </ul>
        </div>
    )
}

export default Logement
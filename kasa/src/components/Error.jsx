import imageErreur from '../assets/images/404.png'
import { Link } from 'react-router'

function Error(){
    return(
        <div>
            <img src={imageErreur} alt='404'/>
            <div>Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/">Accueil</Link>
        </div>
    )
}

export default Error
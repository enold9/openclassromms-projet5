import imageErreur from '../assets/images/404.png'
import { Link } from 'react-router'
import '../styles/style.scss'

function Error(){
    return(
        <div className='error'>
            <img className='error-img' src={imageErreur} alt='404'/>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='error-link' to="/">Retourer sur la page d'accueil</Link>
        </div>
    )
}

export default Error
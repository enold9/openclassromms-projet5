import logo from '../assets/images/LOGO.png'
import { Link } from 'react-router'
import '../styles/style.scss'


function Banner(){
    return(
        <nav className='banner'>
            <img className='banner-img' src={logo} alt='logo'/>
            <div>
                <Link className='banner-link' to="/">Accueil</Link>
                <Link className='banner-link' to="/A-propos">A propos</Link>
            </div>
        </nav>
    )
}

export default Banner
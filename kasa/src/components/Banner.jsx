import logo from '../assets/images/LOGO.png'
import { Link } from 'react-router'
import '../styles/style.scss'


function Banner(){
    return(
        <nav>
            <img src={logo} alt='logo'/>
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/A-propos">A propos</Link>
            </div>
        </nav>
    )
}

export default Banner
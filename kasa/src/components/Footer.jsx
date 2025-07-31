import logo from '../assets/images/LOGO-footer.png'
import '../styles/style.scss'

function Footer(){ 
    return(
        <footer className='footer'>
            <img className='.footer-logo' src={logo} alt='logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
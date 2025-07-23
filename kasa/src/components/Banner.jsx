import logo from '../assets/images/LOGO.png'
import { Link } from 'react-router'
import styled from 'styled-components'

const HomeLogo = styled.img`
  height: 68px;
  width: 210px;
`

const NavContainer = styled.nav`
  padding: 50px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  justify-self: center;
`

const StyledLink = styled(Link)`
  padding: 10px;
  color: black;
  text-decoration: none;
  font-size: 24px;
  text-align: center;
`


function Banner(){
    return(
        <NavContainer>
            <HomeLogo src={logo} alt='logo'/>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/A-propos">A propos</StyledLink>
            </div>
        </NavContainer>
    )
}

export default Banner
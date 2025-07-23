import logo from '../assets/images/LOGO-footer.png'
import styled from 'styled-components'

const HomeLogo = styled.img`
  height: 40px;
  width: 122px;
`

const NavContainer = styled.nav`
  padding: 30px;
  color: white;
  background-color: black;
  text-align: center;
  font-size: 24px;
`

function Footer(){ 
    return(
        <NavContainer>
            <HomeLogo src={logo} alt='logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </NavContainer>
    )
}

export default Footer
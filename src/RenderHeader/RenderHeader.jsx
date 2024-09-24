import styled from 'styled-components';
import ImageLogo from '../assets/images/logo-mlp-tech-art.png';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: #3161C0;
`

/* Navbar */

const NavBar = styled.nav`
  justify-content: space-between;
  padding: 1.5rem 6rem;
  display: flex;

  @media screen and (max-width: 720px) {
    display: none;
  }
`

/* Logo */

const LogoImg = styled.img`
  padding: 8px;
  height: 90px;
  background-color: #fff;
  border-radius: 35px;
`

/* List */

const NavList = styled.div`
  display: flex;
  align-items: center;
  font-size: x-large;
  text-transform: uppercase;
  font-weight: 600;
  gap: 40px;
`

const NavLink = styled.div`

`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

/* Button Desktop */

const LoginButton = styled.div`
  display: flex;
  align-items: center;
`
const Button = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #214289;
  cursor: pointer;
`

const ButtonAncora = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-family: 'Chakra Petch', sans-serif;
`


const MobileMenu = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;

  @media screen and (min-width: 721px) {
    display: none;
  }
`

function RenderHeader(isMenuOpen, toggleMobileMenu) {

  return (
    <div className="body">
      <StyledHeader>
        <NavBar>
          <div className="logo">
            <LogoImg src={ImageLogo} />
          </div>
          <NavList>
            <NavLink onClick={(e) => e.preventDefault()}>
              <StyledLink to="/home">Início</StyledLink>
            </NavLink>
            <NavLink onClick={(e) => e.preventDefault()}>
              <StyledLink to="/projects">Projetos</StyledLink>
            </NavLink>
            <NavLink onClick={(e) => e.preventDefault()}>
              <StyledLink to="/about">Sobre</StyledLink>
            </NavLink>
          </NavList>
          <LoginButton>
            <Button>
              <ButtonAncora href="#">Entrar</ButtonAncora>
            </Button>
          </LoginButton>
        </NavBar>

       <MobileMenu isMenuOpen={isMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      </StyledHeader>
    </div>
  )
}

export default RenderHeader;

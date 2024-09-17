import React, { useState } from 'react';
import styled from 'styled-components';
import ImageLogo from '../assets/images/logo-mlp-tech-art.png';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: #3161C0;
  
  @media screen and (max-width: 768px) {
    /* Add responsive styles here */
  }
`

/* Navbar */

const NavBar = styled.nav`
  justify-content: space-between;
  padding: 1.5rem 6rem;
  display: flex;

  @media screen and (max-width: 768px) {
    padding: 1.5rem 4rem;
    align-items: center;
  }
`

/* Logo */

const LogoImg = styled.img`
  padding: 8px;
  height: 90px;
  background-color: #fff;
  border-radius: 35px;
  /* Additional styles for logo */

  @media screen and (max-width: 768px) {
    padding: 3px;
    height: 60px;
  }
`

/* List */

const NavList = styled.div`
  display: flex;
  align-items: center;
  font-size: x-large;
  text-transform: uppercase;
  font-weight: 600;
`

const NavListUl = styled.ul`
  display: flex;
`

const UlLi = styled.li`
  align-items: center;
  margin: 0 15px;
  
  & :hover {
    cursor: pointer;
  }
`

const NavLink = styled.a`
  color: #fff;
`

/* Button Desktop */

const LoginButton = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: block;
    padding: 1rem 2rem;
  }
`
const Button = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #214289;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const ButtonAncora = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-family: 'Chakra Petch', sans-serif;
`
/* Button Mobile */

const MobileMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
const MobileMenuIconButton = styled.button`
@media screen and (max-width: 768px) {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
`

const MobileMenu = styled.div`
  display: none;
`

const MobileMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 1rem;
`

const NavItem = styled.li`
  display: block;
  padding-top: 1.2rem;
`

function RenderHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="body">
      <StyledHeader>
        <NavBar>
          <div className="logo">
            <LogoImg src={ImageLogo} />
          </div>
          <NavList>
            <NavListUl>
              <UlLi>
                <NavLink onClick={(e) => e.preventDefault()}>
                  <nav>
                    <Link to="/home">Início</Link>
                  </nav>
                </NavLink>
              </UlLi>
              <UlLi>
                <NavLink onClick={(e) => e.preventDefault()}>
                  <nav>
                    <Link to="/projects">Projetos</Link>
                  </nav>
                </NavLink>
              </UlLi>
              <UlLi>
                <NavLink onClick={(e) => e.preventDefault()}>Sobre</NavLink>
              </UlLi>
            </NavListUl>
          </NavList>
          <LoginButton>
            <Button>
              <ButtonAncora href="#">Entrar</ButtonAncora>
            </Button>
          </LoginButton>

          <MobileMenuIcon>
            <MobileMenuIconButton onClick={toggleMobileMenu}>
              <img className="icon" src="assets/images/menu_white_36dp.svg" alt="Menu" />
            </MobileMenuIconButton>
          </MobileMenuIcon>
        </NavBar>
        {isMobileMenuOpen && (
          <MobileMenu>
            <MobileMenuUl>
              <NavItem>
                <a href="./index.html" className="nav-link">Início</a>
              </NavItem>
              <NavItem>
                <a href="./projetos.html" className="nav-link">Projetos</a>
              </NavItem>
              <NavItem>
                <a href="./sobre.html" className="nav-link">Sobre</a>
              </NavItem>
            </MobileMenuUl>
            <LoginButton>
              <Button><a href="#">Entrar</a></Button>
            </LoginButton>
          </MobileMenu>
        )}
      </StyledHeader>
    </div>
  )
}

export default RenderHeader;

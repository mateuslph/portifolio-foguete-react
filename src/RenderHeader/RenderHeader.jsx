import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');

.body {
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif; /* Use Inter as primary, fallback to sans-serif */
}
`

const StyledHeader = styled.header`
  background-color: #3161C0;
  box-shadow: 0px 3px 10px #464646;
  /* Additional styles for the header */
  
  @media screen and (max-width: 768px) {
    /* Add responsive styles here */
  }
`;

const NavBar = styled.nav`
  justify-content: space-between;
  padding: 1.5rem 6rem;
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 1.5rem 4rem;
    align-items: center;
  }
`

const LogoImg = styled.img`
  padding: 8px;
  height: 90px;
  background-size: cover;
  background-color: #fff;
  border-radius: 35px;
  /* Additional styles for logo */

  @media screen and (max-width: 768px) {
    padding: 3px;
    height: 60px;
  }
`

const NavList = styled.div`
  display: flex;
  align-items: center;
`

const NavListUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`

const UlLi = styled.li`
  align-items: center;
  margin: 0 15px;
`

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.15rem;
  color: #fff;
  font-weight: 400;
`

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
  color: #fff; /* Add text color here */
  font-size: 1rem; /* Add font size here */

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const ButtonAncora = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 1.1rem;
`

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
  display: none; /* Moved styles from media query */
`

const MobileMenuUl = styled.ul`
  display: flex; /* Moved styles from media query */
  flex-direction: column;
  text-align: center;
  padding-bottom: 1rem;
`

const NavItem = styled.li`
  display: block; /* Moved styles from media query */
  padding-top: 1.2rem;
`

function RenderHeader() { // Renamed function
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="body">
      <StyledHeader>
        <NavBar>
          <div className="logo">
            <LogoImg src="assets/images/logo-mlp-tech-art.png" />
          </div>
          <NavList>
            <NavListUl>
              <UlLi>
                <NavLink onClick={(e) => e.preventDefault()}>Início</NavLink>
              </UlLi>
              <UlLi>
                <NavLink onClick={(e) => e.preventDefault()}>Projetos</NavLink>
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

import styled from 'styled-components';
import ImageLogo from '../assets/images/logo-mlp-tech-art.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import IconMobileOpen from '../assets/images/menu_white_open.svg';
import IconMobileClose from '../assets/images/menu_white_close.svg';

const StyledHeader = styled.header`
  background-color: #3161C0;
`

/* Navbar */

const NavBar = styled.nav`
  justify-content: space-between;
  padding: 1.5rem 6rem;
  display: flex;

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`

const Button = styled.button`
  font-family: 'Chakra Petch', sans-serif;
  text-transform: uppercase;
  font-size: large;
  border: none;
  padding: 15px 25px;
  border-radius: 5px;
  background-color: #214289;
  cursor: pointer;
`

/* Mobile */

const NavMobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: inline;
  } 
`

const HeaderMobile = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`

const MenuMobile = styled.div`
  display: flex;
  width: 35px;
  background: no-repeat;
  margin: 25px 22px;
  background-position: center;

  &.open {
    background-image: url(${IconMobileOpen});
  }
  
  &.close {
    background-image: url(${IconMobileClose});
  }
`

const ColunaMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border-top: solid 5px #4A8DCB;
`

const MobileMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: #fff;
  width: 100%;
`

const StyledLinkMobile = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;  
  font-size: larger;
  font-weight: 500;
`

const TituloPagina = styled.h3`
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  font-size: x-large;
  text-transform: uppercase;
`
const LogoImgMobile = styled.img`
  background-color: #fff;
  height: 45px;
  width: auto;
  border-radius: 15px;
  padding: 3px;
  margin: 20px;
`

function RenderHeader() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

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
            <Button onClick={(e) => e.preventDefault()}>
              <StyledLink to="/home">Entrar</StyledLink>
            </Button>
          </LoginButton>
        </NavBar>

        <NavMobile >
          <HeaderMobile>
            <MenuMobile onClick={toggleMenu} className={isOpen ? 'open' : 'close'}></MenuMobile>
            <TituloPagina >Portifólio</TituloPagina>
            <div className="logo">
              <LogoImgMobile src={ImageLogo} />
            </div>
          </HeaderMobile>
          {isOpen && (
            <ColunaMobile>
              <MobileMenuUl>
              <NavItem onClick={() => { handleLinkClick() }}>
                  <StyledLinkMobile to="/home">Home</StyledLinkMobile>
                </NavItem>
                <NavItem onClick={() => { handleLinkClick() }}>
                  <StyledLinkMobile to="/projects">Projetos</StyledLinkMobile>
                </NavItem>
                <NavItem onClick={() => { handleLinkClick() }}>
                  <StyledLinkMobile to="/about">Sobre</StyledLinkMobile>
                </NavItem>
                <NavItem onClick={() => { handleLinkClick() }}>
                  <StyledLinkMobile to="/home">Entrar</StyledLinkMobile>
                </NavItem>
              </MobileMenuUl>
            </ColunaMobile>
          )}
        </NavMobile>
      </StyledHeader>
    </div>
  )
}

export default RenderHeader;

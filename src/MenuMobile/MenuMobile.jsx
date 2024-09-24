import { useState } from 'react';
import styled from 'styled-components';

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

const StyledLinkMobile = styled.div`

`

const LoginButton = styled.div`
  display: block;
  padding: 1rem 2rem;
`

const Button = styled.div`
  width: 100%;
`

function MenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <RenderHeader toggleMobileMenu={toggleMobileMenu} />
      {isMenuOpen && (
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <button onClick={toggleMobileMenu}>Toggle Menu</button>
            <MobileMenuUl>
              <NavItem onClick={(e) => e.preventDefault()}>
                <StyledLinkMobile to="/home">Início</StyledLinkMobile>
              </NavItem>
              <NavItem onClick={(e) => e.preventDefault()}>
                <StyledLinkMobile to="/projects">Projetos</StyledLinkMobile>
              </NavItem>
              <NavItem onClick={(e) => e.preventDefault()}>
                <StyledLinkMobile to="/about">Sobre</StyledLinkMobile>
              </NavItem>
            </MobileMenuUl>
            <LoginButton>
              <Button>
                <a href="#">Entrar</a>
              </Button>
            </LoginButton>
        </div>
      )}
    </div>
  )
}

export default MenuMobile;

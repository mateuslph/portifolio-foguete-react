import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import styled from 'styled-components'; // Import styled-components for styling

import ImageLogo from '../assets/images/logo-mlp-tech-art.png'; // Import the logo image
import IconMobileOpen from '../assets/images/menu_white_open.svg'; // Import the mobile menu open icon
import IconMobileClose from '../assets/images/menu_white_close.svg'; // Import the mobile menu close icon

// Styled components for the header
const StyledHeader = styled.header` // Styled component for the header
  background-color: #3161C0; // Background color for the header
`;

// Styled component for the desktop navigation bar
const StyledNavBar = styled.nav`
  justify-content: space-between; // Space between logo and menu
  padding: 1.5rem 6rem; // Padding around the navigation bar
  display: flex; // Flexbox to align items

  @media screen and (max-width: 768px) { // Media query for smaller screens
    display: none; // Hide the navigation bar on smaller screens
  } 
`;

// Styled component for the logo image
const StyledLogoImage = styled.img`
  padding: 8px; // Padding around the logo
  height: 90px; // Height of the logo
  background-color: #fff; // Background color of the logo
  border-radius: 35px; // Rounded corners for the logo
`;

// Styled component for the navigation list
const StyledNavList = styled.div`
  display: flex; // Flexbox for list items
  align-items: center; // Center items vertically
  font-size: x-large; // Font size of the list items
  text-transform: uppercase; // Uppercase text
  font-weight: 600; // Bold font weight
  gap: 40px; // Space between list items
`;

// Styled component for individual navigation links
const StyledNavLink = styled.div``;

// Styled Link component for navigation
const StyledLink = styled(Link)`
  text-decoration: none; // Remove underline from links
  color: #fff; // Color of the links
`;

// Styled component for the login button container
const StyledLoginButton = styled.div`
  display: flex; // Flexbox for the button
  align-items: center; // Center the button vertically

  @media screen and (max-width: 768px) { // Media query for smaller screens
    margin-top: 20px; // Add margin on smaller screens
  }
`;

// Styled component for the button
const StyledButton = styled.button`
  font-family: 'Chakra Petch', sans-serif; // Font family of the button
  text-transform: uppercase; // Uppercase text
  font-size: large; // Font size of the button
  border: none; // Remove border
  padding: 15px 25px; // Padding around the button text
  border-radius: 5px; // Rounded corners
  background-color: #214289; // Background color of the button
  cursor: pointer; // Change cursor to pointer
`;

// Styled component for the mobile navigation
const StyledNavMobile = styled.div`
  display: none; // Hide on larger screens

  @media screen and (max-width: 768px) { // Media query for smaller screens
    display: inline; // Show on smaller screens
  } 
`;

// Styled component for the mobile header
const StyledHeaderMobile = styled.div`
  display: flex; // Flexbox for items
  justify-content: space-between; // Space between items
  padding: 0 20px; // Padding around the header
`;

// Styled component for the mobile menu icon
const StyledMenuMobile = styled.div`
  display: flex; // Flexbox for the icon
  width: 35px; // Width of the icon
  background: no-repeat; // No repeating background
  margin: 25px 22px; // Margin around the icon
  background-position: center; // Center the background image

  &.open { // Style for open state
    background-image: url(${IconMobileOpen}); // Open icon
  }
  
  &.close { // Style for close state
    background-image: url(${IconMobileClose}); // Close icon
  }
`;

// Styled component for the mobile menu column
const StyledColunaMobile = styled.div`
  display: flex; // Flexbox
  align-items: center; // Align items vertically
  justify-content: center; // Align items horizontally
  padding: 10px 0; // Padding
  border-top: solid 5px #4A8DCB; // Top border
`;

// Styled component for the mobile menu list
const StyledMobileMenuUl = styled.ul`
  display: flex; // Flexbox for list items
  flex-direction: column; // Stack items vertically
  align-items: center; // Center items horizontally
`;

// Styled component for individual mobile menu items
const StyledNavItem = styled.li`
  display: flex; // Flexbox
  align-items: center; // Center items vertically
  justify-content: center; // Center items horizontally
  padding: 1rem; // Padding
  color: #fff; // Text color
  width: 100%; // Full width
`;

// Styled Link for mobile navigation
const StyledLinkMobile = styled(Link)`
  text-decoration: none; // Remove underline
  color: inherit; // Inherit color from parent
  text-transform: uppercase; // Uppercase text
  font-size: larger; // Font size
  font-weight: 500; // Font weight
`;

// Styled component for the page title in mobile view
const StyledPageTitle = styled.h3`
  display: flex; // Flexbox
  align-items: center; // Center items vertically
  text-align: center; // Center text
  color: #fff; // Text color
  font-size: x-large; // Font size
  text-transform: uppercase; // Uppercase text
`;

// Styled component for the mobile logo
const StyledLogoImageMobile = styled.img`
  background-color: #fff; // Background color
  height: 45px; // Height of the logo
  width: auto; // Maintain aspect ratio
  border-radius: 15px; // Rounded corners
  padding: 3px; // Padding
  margin: 20px; // Margin
`;

// Function to toggle the mobile menu
const toggleMenu = (isOpen, setIsOpen) => {
  setIsOpen(!isOpen); // Toggle the state of isOpen
};

// Function to handle link clicks in the mobile menu
const handleLinkClick = (setIsOpen) => {
  setIsOpen(false); // Close the menu
};

function Header() {

  const [isOpen, setIsOpen] = useState(false) // State to manage if the menu is open or closed

  return (
    <div className="body">
      <StyledHeader>
        <StyledNavBar>
          <div className="logo">
            <StyledLogoImage src={ImageLogo} />
          </div>{/* Logo of the site */}
          <StyledNavList> {/* List of the navbar links */}
            <StyledNavLink onClick={(e) => e.preventDefault()}>
              <StyledLink to="/home">Início</StyledLink>
            </StyledNavLink>
            <StyledNavLink onClick={(e) => e.preventDefault()}>
              <StyledLink to="/projects">Projetos</StyledLink>
            </StyledNavLink>
            <StyledNavLink onClick={(e) => e.preventDefault()}>
              <StyledLink to="/about">Sobre</StyledLink>
            </StyledNavLink>
          </StyledNavList>
          <StyledLoginButton> {/* Login button */}
            <StyledButton onClick={(e) => e.preventDefault()}>
              <StyledLink to="/home">Entrar</StyledLink>
            </StyledButton>
          </StyledLoginButton>
        </StyledNavBar>

        <StyledNavMobile >{/* Mobile navbar */}
          <StyledHeaderMobile>
            <StyledMenuMobile onClick={() => toggleMenu(isOpen, setIsOpen)} className={isOpen ? 'open' : 'close'}></StyledMenuMobile> {/* Menu to open and close */}
            <StyledPageTitle >Portifólio</StyledPageTitle> {/* Name of the page */}
            <div className="logo">
              <StyledLogoImageMobile src={ImageLogo} />
            </div>
          </StyledHeaderMobile>
          {isOpen && ( // If the menu is open, show the options
            <StyledColunaMobile>
              <StyledMobileMenuUl> {/* List of links */}
              <StyledNavItem onClick={() => { handleLinkClick(setIsOpen) }}>
                <StyledLinkMobile to="/home">Home</StyledLinkMobile>
              </StyledNavItem>
              <StyledNavItem onClick={() => { handleLinkClick(setIsOpen) }}>
                <StyledLinkMobile to="/projects">Projetos</StyledLinkMobile>
              </StyledNavItem>
              <StyledNavItem onClick={() => { handleLinkClick() }}>
                <StyledLinkMobile to="/about">Sobre</StyledLinkMobile>
              </StyledNavItem>
              <StyledNavItem onClick={() => { handleLinkClick() }}>
                <StyledLinkMobile to="/home">Entrar</StyledLinkMobile>
              </StyledNavItem>
              </StyledMobileMenuUl>
            </StyledColunaMobile>
          )} 
        </StyledNavMobile>
      </StyledHeader>
    </div>
  )
}

export default Header;

import styled from 'styled-components';
import ImageBackground from '../assets/images/background-blue-color-square.jpg';
import ImageFoguete from '../assets/images/foguete.png';
import { Link } from 'react-router-dom';

// Styled component for the background image container
const StyledBackgroundImageContainer = styled.div`
  background-image: url(${ImageBackground});
  background-attachment: fixed;
  min-height: 550px;
  height: max-content;
  display: flex;
  justify-content: center; // Center the content horizontally

  // Media query for larger screens (tablets)
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    // Adjust the minimum height for larger screens
    min-height: 900px;
    height: max-content;
  }
`

// Styled component for the content container
const StyledContent = styled.div`
  width: 100%;
  display: flex;
  // Center the content both horizontally and vertically
  align-items: center;
  justify-content: center;
  padding: 40px;
`

const StyledRocketContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center; // Center the rocket cards horizontally
  flex-wrap: wrap;
  gap: 40px;

  // Media query for smaller screens (mobiles)
  @media screen and (max-width: 768px) {
    // Display the cards in a grid layout
    display: grid;
    // Add padding and adjust the gap
    padding: 20px 0;
    gap: 60px;
    margin-top: 10px;
    margin-bottom: 40px;
  }
`

const StyledRocketCard = styled.div`
  // Flex container to center the content
  display: flex;
  justify-content: center;
  width: 280px;
  height: 300px;
  position: relative;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 35px 80px rgba(0, 0, 0, 0.15);
  transition: 0.5s all ease-in-out;

  // Media query for smaller screens (mobiles)
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }

  // Hover effect for the rocket card
  &:hover {
    height: 330px;
    // Hover effect for the image
    & Img {
      position: relative;      
      transition: 0.5s all ease-out;
      transform: translateY(-100px) scale(0.75);
    }
    // Hover effect for the content
    & .content {
      height: 200px;
      top: 130px;
      transition: 0.5s all ease-in-out;
    }
  }
`;

const StyledImgBox = styled.div``;

// Styled component for the image
const StyledImage = styled.img`
  height: 240px;
`

// Styled component for the content inside the rocket card
const Content = styled.div`
  display: flex;
  // Stack elements vertically
  flex-direction: column;
  gap: 18px;
  position: absolute;
  top: 255px;
  width: 80%;
  padding: 0px 30px;
  text-align: center;
  height: 30px;
  overflow: hidden;
  transition: 0.5s;
`

// Styled component for the card title
const StyledCardTitle = styled.h2`
  font-weight: 600;
  font-size: x-large;
`

const ReadMore = styled.div`
  background: linear-gradient(90deg, #3730a3, #7e22ce);
  padding: 12px;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`

// Styled component for the link
const StyledNavLink = styled.div``;

// Styled component for the link itself
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

// Function to prevent default action on link click
const handlePreventDefault = (e) => {
  e.preventDefault()
}

// Main Home component
function Home() {
  return (
    // Main container
    <div className='body'>
      <StyledBackgroundImageContainer>
        <StyledContent>
          <StyledRocketContainer>
            <StyledRocketCard>
              <StyledImgBox>
                <StyledImage src={ImageFoguete} alt="Um foguete" />
              </StyledImgBox>
              <Content className='content'>
                <StyledCardTitle>Sobre Eu</StyledCardTitle>
                <p>
                  Formado com ênfase à programação Java para o Back-end e React
                  para o Front-end.
                </p>
                <ReadMore>
                  <StyledNavLink onClick={handlePreventDefault}>
                    <StyledLink to="/about">Saiba Mais</StyledLink>
                  </StyledNavLink>
                </ReadMore>
              </Content>
            </StyledRocketCard>

            <StyledRocketCard>
              <StyledImgBox>
                <StyledImage src={ImageFoguete} alt="Um foguete" />
              </StyledImgBox>
              <Content className='content'>
                <StyledCardTitle>Meu Currículo</StyledCardTitle>
                <p>
                  Jovem elétricamente guiado por astros,{' '}
                  <b>freelancer</b> atuante em programação Full-stack.
                </p>                
                <ReadMore>
                  <StyledNavLink onClick={handlePreventDefault}>
                    <StyledLink to="#">Saiba Mais</StyledLink>
                  </StyledNavLink>
                </ReadMore>
              </Content>
            </StyledRocketCard>

            <StyledRocketCard>
              <StyledImgBox>
                <StyledImage src={ImageFoguete} alt="Um foguete" />
              </StyledImgBox>
              <Content className='content'>
                <StyledCardTitle>Habilidades</StyledCardTitle>
                <p>
                  CI-CD | Vercionamento | Ágile | Orientação a Objetos |
                  Domain-driven Design | Testes
                </p>
                <ReadMore>
                  <StyledNavLink onClick={handlePreventDefault}>
                    <StyledLink to="/#">Saiba Mais</StyledLink>
                  </StyledNavLink>
                </ReadMore>
              </Content>
            </StyledRocketCard>
          </StyledRocketContainer>
        </StyledContent>
      </StyledBackgroundImageContainer>
    </div>
  )
}

export default Home;

import styled from 'styled-components';
import ImageFoguete from '../assets/images/foguete.png';
import ImageBackground from '../assets/images/background-blue-color-square.jpg';
import { Link } from 'react-router-dom';

const ImgBackground = styled.div`
  background-image: url(${ImageBackground});
  background-attachment: fixed;
  min-height: 550px;
  height: max-content;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    height: 900px;
  }
`

const Conteudo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`

const ContainerFoguete = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (max-width: 768px) {
    display: grid;
    padding: 20px 0;
    gap: 60px;
    margin-top: 10px;
    margin-bottom: 40px;
  }
`

const CardFoguete = styled.div`
  display: flex;
  justify-content: center;
  width: 280px;
  height: 300px;
  position: relative;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 35px 80px rgba(0, 0, 0, 0.15);
  transition: 0.5s all ease-in-out;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }

  &:hover {
    height: 330px;
    & Img {
      position: relative;
      transition: 0.5s all ease-out;
      transform: translateY(-100px) scale(0.75);
    }
    & .content {
      height: 200px;
      top: 130px;
      transition: 0.5s all ease-in-out;
    }
  }
`

const ImgBox = styled.div`

`

const Img = styled.img`
  height: 240px;
`

const Content = styled.div`
  display: flex;
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

const TituloCard = styled.h2`
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

const NavLink = styled.div`

`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

function Home() {
  return (
    <div className='body'>
      <ImgBackground>
        <Conteudo>
          <ContainerFoguete>
            <CardFoguete>
              <ImgBox>
                <Img src={ImageFoguete} alt="Um foguete" />
              </ImgBox>
              <Content className='content'>
                <TituloCard>Sobre Eu</TituloCard>
                <p>
                  Formado com ênfase à programação Java para o Back-end e React para o Front-end.
                </p>
                <ReadMore>
                  <NavLink onClick={(e) => e.preventDefault()}>
                    <StyledLink to="/about">Saiba Mais</StyledLink>
                  </NavLink>
                </ReadMore>
              </Content>
            </CardFoguete>

            <CardFoguete>
              <ImgBox>
                <Img src={ImageFoguete} alt="Um foguete" />
              </ImgBox>
              <Content className='content'>
                <TituloCard>Meu Currículo</TituloCard>
                <p>
                  Jovem elétricamente guiado por astros, <b>freelancer</b> atuante em programação Full-stack.
                </p>
                <ReadMore>
                  <NavLink onClick={(e) => e.preventDefault()}>
                    <StyledLink to="#">Saiba Mais</StyledLink>
                  </NavLink>
                </ReadMore>
              </Content>
            </CardFoguete>

            <CardFoguete>
              <ImgBox>
                <Img src={ImageFoguete} alt="Um foguete" />
              </ImgBox>
              <Content className='content'>
                <TituloCard>Habilidades</TituloCard>
                <p>
                  CI-CD | Vercionamento | Ágile | Orientação a Objetos | Domain-driven Design | Testes
                </p>
                <ReadMore>
                  <NavLink onClick={(e) => e.preventDefault()}>
                    <StyledLink to="/#">Saiba Mais</StyledLink>
                  </NavLink>
                </ReadMore>
              </Content>
            </CardFoguete>
          </ContainerFoguete>
        </Conteudo>
      </ImgBackground>
    </div>
  )
}

export default Home;

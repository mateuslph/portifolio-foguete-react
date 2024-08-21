import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');   

  body {
    font-family: 'Poppins', sans-serif;   

  }
`

const TodoConteudo = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;S
`
const ConteinerConteudo = styled.div`

`

const ContainerFoguete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: grid;
    padding: 20px 0;
  }
`

const CardFoguete = styled.div`
  display: flex;
  margin: 0 20px;
  justify-content: center;
  width: 280px;
  height: 300px;
  position: relative;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 35px 80px rgba(0, 0, 0, 0.15);
  transition: 0.5s;

  &:hover {
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`

const ImgBox = styled.div`
  position: absolute;
  width: 250px;
  height: auto;
  top: 0px;
  transition: 0.5s;

  &:hover {
    top: -100px;
    scale: 0.75;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: absolute;
  top: 250px;
  width: 100%;
  padding: 0px 30px;
  text-align: center;
  height: 30px;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    top: 130px;
    height: 250px;
  }
`

const ReadMore = styled.div`
  background: linear-gradient(90deg, #3730a3, #7e22ce);
  padding: 12px;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
`

function Home() {
  return (
    <TodoConteudo>
      <section>
        <ConteinerConteudo>
          <ContainerFoguete>
              <CardFoguete>
              <ImgBox>
                <Img className="foguete" src={"foguete.png"} alt="Um foguete" />
              </ImgBox>
                  <Content>
                      <h2>Sobre Eu</h2>
                      <p>
                          Sou Técnico em Desenvolvimento de Sistemas, formado com ênfase à programação Java para o
                          Back-end
                          e React para o Front-end.
                      </p>
                      <ReadMore>
                          Saiba Mais
                      </ReadMore>
                  </Content>
              </CardFoguete>
          

            <CardFoguete>
              <ImgBox>
                <Img className="foguete" src={"foguete.png"} alt="Um foguete" />
              </ImgBox>
              <Content>
                  <h2>Meu Currículo</h2>
                  <p>
                      Jovem elétricamente guiado por astros, <b>freelancer</b> atuante em programação Full-stack.
                  </p>
                  <ReadMore>
                      Saiba Mais
                  </ReadMore>
              </Content>
            </CardFoguete>

            <CardFoguete>
              <ImgBox>
                <Img className="foguete" src={"foguete.png"} alt="Um foguete" />
              </ImgBox>
              <Content>
                  <h2>Habilidades</h2>
                  <p>
                      CI-CD | Vercionamento | Ágile | Orientação a Objetos | Domain-driven Design | Testes
                  </p>
                  <ReadMore>
                      Saiba Mais
                  </ReadMore>
              </Content>
            </CardFoguete>
          </ContainerFoguete>
        </ConteinerConteudo>
      </section>
    </TodoConteudo>
  )
}

export default Home;

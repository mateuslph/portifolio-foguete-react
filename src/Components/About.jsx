import React from 'react';
import styled from "styled-components";
import ImageBackground from '../assets/images/background-blue-color-square.jpg';
// Styled component for the background image container
const StyledBackgroundImageContainer = styled.div`
  background-image: url(${ImageBackground});
  background-attachment: fixed;
  height: max-content;

  // Media query for tablets
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    min-height: 900px;
    height: max-content;
  }
`;

// Styled component for the content container
const StyledContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

// Styled component for the main title
// It is on the top of the page
// It contains the styling for the title and its responsive behavior
const StyledMainTitle = styled.h2`
    font-size: 2.5rem;
    color: #E9E9E9;
    border-bottom: 3px solid #E9E9E9;
    width: 90%;
    max-width: 1200px;
    padding-bottom: 5px;
    margin: 40px 0 120px 0;
    font-weight: 600;
    position: relative;
    top: 40px;

    // Media query for mobile devices
    @media (max-width: 768px) {
        font-size: x-large;
        padding-bottom: 3px;
        margin: 20px 0 60px 0;
        width: 80%;
        top: 20px;
    }
`

// Styled component for the About section card
// It contains the styling for the card and its responsive behavior
const StyledAboutCard = styled.div`
    // styles for border and background
    border: 5px solid rgba(0, 255, 255, 0.5);
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    text-align: justify;
    margin-bottom: 60px;
    padding: 60px 60px 45px 60px;
    width: 75vw;

    // Media query for mobile devices
    @media screen and (max-width: 768px) {
        display: grid;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 75%;
        margin-bottom: 30px;
        padding: 20px 20px 10px 20px;
        border-radius: 20px;       
        width: 75vw;
    }
`;

// Styled component for the About card header
// It contains the styling for the card header and its responsive behavior
const StyledAboutCardHeader = styled.div`
    font-weight: 800;

    // Media query for mobile devices
    @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

// Styled component for the subtitle
const StyledSubtitle = styled.h2`
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 5px;

    @media screen and (max-width: 768px) {
        font-size: x-large;
        margin-bottom: 3px;
        text-align: center;
    }
`;

// Styled component for the paragraph
// It contains the styling for the paragraph and its responsive behavior
const StyledParagraph = styled.p`
    margin-bottom: 15px;
    line-height: 25px;

    @media screen and (max-width: 768px) {
        margin-bottom: 12px;
        font-size: larger;
        width: 100%;
        line-height: 15px;
    }
`;

// Styled component for the project list item
const StyledProjectLi = styled.li`
    @media screen and (max-width: 768px) {
        text-align: start;
    }
`;

// Styled component for the project link
// It contains the styling for the link and its states
const StyledProjectLink = styled.a`
    // styles for link
    text-decoration: none;
    color: red;

    &:visited {
        color: green;
    }

    &:hover {
        color: #7f37c9;
    }
`
function About() {
  //About component
  return (
    <>
      {/* Background Image Container */}
      <StyledBackgroundImageContainer>
        <StyledContentContainer>
          {/* Main Title */}
          <StyledMainTitle>Apresentando-se</StyledMainTitle>
          <StyledAboutCard>
            <StyledAboutCardHeader>
              <StyledParagraph>Nome: Mateus L. Pereira</StyledParagraph>

              <StyledParagraph>
                Cargo: Técnico em Desenvolvimento de Sistemas, Freelancer
                Full-stack
              </StyledParagraph>

              <StyledParagraph>
                Especialidade: Desenvolvimento de páginas web com foco em
                Domain-Driven Design (DDD)
              </StyledParagraph>
            </StyledAboutCardHeader>
          </StyledAboutCard>

          {/* About Me Card */}
          <StyledAboutCard>
            <StyledSubtitle>Resumo:</StyledSubtitle>

            <StyledParagraph>
              Sou um profissional experiente e apaixonado por desenvolvimento de
              software, com foco em soluções web robustas e escaláveis. Possuo
              expertise em Domain-Driven Design (DDD), uma abordagem que garante
              que o código esteja sempre alinhado com o negócio do cliente.
            </StyledParagraph>

            <StyledSubtitle>Experiência:</StyledSubtitle>

            <StyledParagraph>
              Desenvolvimento Full-stack: Proficiência em linguagens de
              front-end (HTML, CSS, JavaScript) e back-end (PHP, Python, Java),
              além de frameworks populares como React, Angular e Spring Boot.
              Domain-Driven Design (DDD): Aplico os princípios do DDD para
              criar modelos de software que refletem com precisão o domínio do
              negócio, facilitando a comunicação entre equipe e cliente, e
              garantindo a manutenção a longo prazo. Metodologias Ágeis: Atuo
              com metodologias ágeis, como Scrum e Kanban, para entregar
              projetos de forma incremental e com alta qualidade. Integração
              Contínua (CI) e Entrega Contínua (CD): Implemento práticas de
              CI/CD para garantir a qualidade do código e agilidade na entrega
              de novos recursos.
            </StyledParagraph>

            <StyledSubtitle>Diferenciais:</StyledSubtitle>

            <StyledParagraph>
              Visão holística: Entendo as necessidades do negócio e as traduzo
              em soluções de software eficientes e eficazes. Comunicação clara
              e objetiva: Me comunico de forma clara e concisa com clientes e
              equipe, garantindo um alinhamento perfeito entre todos os
              envolvidos no projeto. Aprendizagem contínua: Estou sempre
              buscando me atualizar com as últimas tecnologias e tendências do
              mercado, para oferecer as melhores soluções aos meus clientes.
              Paixão pelo que faço: Sou apaixonado por desenvolvimento de
              software e me dedico a cada projeto com entusiasmo e
              profissionalismo.
            </StyledParagraph>

            <StyledSubtitle>Ferramentas:</StyledSubtitle>

            <StyledParagraph>
              Linguagens de programação: PHP, Python, Java, JavaScript, HTML,
              CSS Frameworks: React, Angular, Spring Boot Ferramentas de CI/CD:
              Jenkins, GitLab CI/CD, Travis CI Banco de dados: MySQL,
              PostgreSQL
            </StyledParagraph>

            <StyledSubtitle>Alguns dos meus projetos:</StyledSubtitle>

            <StyledParagraph>
              <StyledProjectLi>
                <StyledProjectLink
                  href="https://aluratube-tan-five.vercel.app/"
                  target="_blank"
                  >
                  <b>ALURATUBE</b>
                </StyledProjectLink>
                : Simula o Youtube (
                <a href="https://www.alura.com.br/">Alura</a>);
              </StyledProjectLi>
              <StyledProjectLi>
                <StyledProjectLink
                  href="https://organo-phi-beryl.vercel.app/" target="_blank"
                  >
                  <b>ORGANO</b>
                </StyledProjectLink>
                : Inscrição de cursos;
              </StyledProjectLi>
              <StyledProjectLi>
                <StyledProjectLink
                  href="https://local-storage-ruddy.vercel.app/"
                  target="_blank"
                  >
                  <b>LOCAL STORANGE</b>
                </StyledProjectLink>
                : Utiliza Storage do navegador;
              </StyledProjectLi>
            </StyledParagraph>

            <StyledSubtitle>Portfólio:</StyledSubtitle>

            <StyledParagraph>
              Acesse meu portfólio online para ver mais detalhes sobre meus
              projetos e minhas habilidades:
            </StyledParagraph>

            <StyledSubtitle>Contato:</StyledSubtitle>

            <StyledParagraph>E-mail: emelepe@email.com</StyledParagraph>

            <StyledParagraph>
              Telefone: +55 55 9 9090-8888
            </StyledParagraph>

            <StyledParagraph>
              Enderereço: Rua Alvorino Carvalho, N° 101, Bairro Promorar 1,
              Palmeira das Missões - RS
            </StyledParagraph>

            <StyledSubtitle>Me acompanhe</StyledSubtitle>

            <StyledParagraph>
              Estou pronto para te ajudar a transformar suas ideias em soluções
              digitais inovadoras e eficientes!
            </StyledParagraph>
            </StyledAboutCard>
        </StyledContentContainer>
      </StyledBackgroundImageContainer>
    </>
  );
}

export default About;

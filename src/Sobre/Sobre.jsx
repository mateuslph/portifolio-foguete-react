import React, { useState } from 'react';
import styled from "styled-components";
import ImageBackground from '../assets/images/background-blue-color-square.jpg';

const ImgBackground = styled.div`
  background-image: url(${ImageBackground});
  background-attachment: fixed;
  height: max-content;
`

const Conteudo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const TituloPrincipal = styled.h2`
    font-size: 2.5rem;
    color: #E9E9E9;
    border-bottom: 3px solid #E9E9E9;
    width: 90%;
    max-width: 1200px;
    padding-bottom: 5px;
    position: relative;
    top: 40px;
    margin: 40px 0 120px 0;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        font-size: x-large;
        padding-bottom: 3px;
        margin: 20px 0 60px 0;
        width: 80%;
        top: 20px;
    }
`

const CardSobre = styled.div`
    border: 5px solid #00ffff7f;
    border-radius: 40px;
    text-align: justify;
    margin-bottom: 60px;
    padding: 60px 60px 45px 60px;
    width: 75vw;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 75%;
        margin-bottom: 30px;
        padding: 20px 20px 10px 20px;
        border-radius: 20px;       
        width: 75vw;
    }
`

const CardSobreCabecalho = styled.div`
    font-weight: 800;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`

const Subtitulo = styled.h2`
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 5px;

    @media screen and (max-width: 768px) {
        font-size: x-large;
        margin-bottom: 3px;
        text-align: center;
    }
`

const Paragrafo = styled.p`
    margin-bottom: 15px;
    line-height: 25px;

    @media screen and (max-width: 768px) {
        margin-bottom: 12px;
        font-size: larger;
        width: 100%;
        line-height: 15px;
    }
`

const ProjetosLi = styled.li`
    @media screen and (max-width: 768px) {
        text-align: start;
    }
`

const ProjetoLink = styled.a`
    text-decoration: none;
    color: red;

    &:visited {
        color: green;
    }

    &:hover {
        color: #7f37c9;
    }
`

function Sobre() {
    const [isMobileMenuOpen] = useState(false)

    return (
        <div>
            <ImgBackground>
                <Conteudo>
                    <TituloPrincipal>Apresentando-se</TituloPrincipal>
                    <CardSobre>
                        <CardSobreCabecalho>
                            <Paragrafo>Nome: Mateus L. Pereira</Paragrafo>

                            <Paragrafo>Cargo: Técnico em Desenvolvimento de Sistemas, Freelancer Full-stack</Paragrafo>

                            <Paragrafo>Especialidade: Desenvolvimento de páginas web com foco em Domain-Driven Design (DDD)</Paragrafo>
                        </CardSobreCabecalho>
                    </CardSobre>

                    <CardSobre>
                        <Subtitulo>
                            Resumo:
                        </Subtitulo>

                        <Paragrafo>
                            Sou um profissional experiente e apaixonado por desenvolvimento de software, com foco em soluções
                            web robustas e escaláveis. Possuo expertise em Domain-Driven Design (DDD), uma abordagem que garante
                            que
                            o código esteja sempre alinhado com o negócio do cliente.
                        </Paragrafo>

                        {isMobileMenuOpen && (
                            <div>
                                <Paragrafo>
                                    Foco em soluções web robustas e escaláveis. <br />Possuo expertise em Domain-Driven Design (DDD),
                                    <br />uma abordagem
                                    que garante que o código esteja <br /> sempre alinhado com o negócio do cliente.
                                </Paragrafo>
                            </div>
                        )}

                        <Subtitulo>
                            Experiência:
                        </Subtitulo>

                        <Paragrafo>
                            Desenvolvimento Full-stack: Proficiência em linguagens de front-end (HTML, CSS, JavaScript) e
                            back-end
                            (PHP,
                            Python, Java), além de frameworks populares como React, Angular e Spring Boot.
                            Domain-Driven Design (DDD): Aplico os princípios do DDD para criar modelos de software que
                            refletem
                            com
                            precisão o domínio do negócio, facilitando a comunicação entre equipe e cliente, e garantindo a
                            manutenção a
                            longo prazo.
                            Metodologias Ágeis: Atuo com metodologias ágeis, como Scrum e Kanban, para entregar projetos de
                            forma
                            incremental e com alta qualidade.
                            Integração Contínua (CI) e Entrega Contínua (CD): Implemento práticas de CI/CD para garantir a
                            qualidade
                            do
                            código e agilidade na entrega de novos recursos.
                        </Paragrafo>

                        <Subtitulo>
                            Diferenciais:
                        </Subtitulo>

                        <Paragrafo>
                            Visão holística: Entendo as necessidades do negócio e as traduzo em soluções de software
                            eficientes
                            e
                            eficazes.
                            Comunicação clara e objetiva: Me comunico de forma clara e concisa com clientes e equipe,
                            garantindo
                            um
                            alinhamento perfeito entre todos os envolvidos no projeto.
                            Aprendizagem contínua: Estou sempre buscando me atualizar com as últimas tecnologias e
                            tendências do
                            mercado, para oferecer as melhores soluções aos meus clientes.
                            Paixão pelo que faço: Sou apaixonado por desenvolvimento de software e me dedico a cada projeto
                            com
                            entusiasmo e profissionalismo.
                        </Paragrafo>

                        <Subtitulo>
                            Ferramentas:
                        </Subtitulo>

                        <Paragrafo>
                            Linguagens de programação: PHP, Python, Java, JavaScript, HTML, CSS
                            Frameworks: React, Angular, Spring Boot
                            Ferramentas de CI/CD: Jenkins, GitLab CI/CD, Travis CI
                            Banco de dados: MySQL, PostgreSQL
                        </Paragrafo>

                        <Subtitulo>
                            Alguns dos meus projetos:
                        </Subtitulo>

                        <Paragrafo>
                            <ProjetosLi>
                                <ProjetoLink href="https://aluratube-tan-five.vercel.app/" target="_blank"><b>ALURATUBE</b></ProjetoLink>
                                : Simula o Youtube (<a href="https://www.alura.com.br/">Alura</a>);
                            </ProjetosLi>
                            <ProjetosLi>
                                <ProjetoLink href="https://organo-phi-beryl.vercel.app/" target="_blank"><b>ORGANO</b></ProjetoLink>
                                : Inscrição de cursos;
                            </ProjetosLi>
                            <ProjetosLi>
                                <ProjetoLink href="https://local-storage-ruddy.vercel.app/" target="_blank"><b>LOCAL STORANGE</b></ProjetoLink>
                                : Utiliza Storange do navegador;
                            </ProjetosLi>
                        </Paragrafo>
                    
                        <Subtitulo>
                            Portfólio:
                        </Subtitulo>

                        <Paragrafo>
                            Acesse meu portfólio online para ver mais detalhes sobre meus projetos e minhas habilidades:
                        </Paragrafo>

                        <Subtitulo>
                            Contato:
                        </Subtitulo>

                        <Paragrafo>
                            E-mail: emelepe@email.com
                        </Paragrafo>

                        <Paragrafo>
                            Telefone: +55 55 9 9090-8888
                        </Paragrafo>

                        <Paragrafo>
                            Enderereço: Rua Alvorino Carvalho, N° 101, Bairro Promorar 1, Palmeira das Missões - RS
                        </Paragrafo>

                        <Subtitulo>
                            Me acompanhe
                        </Subtitulo>

                        <Paragrafo>
                            Estou pronto para te ajudar a transformar suas ideias em soluções digitais inovadoras e eficientes!
                        </Paragrafo>
                    </CardSobre>
                </Conteudo>
            </ImgBackground>
        </div>
    )
}

export default Sobre;

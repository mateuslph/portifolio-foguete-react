import React, { useState } from 'react';
import styled from "styled-components";
import ImageBackground from '../assets/images/background-blue-color-square.jpg';

const ImgBackground = styled.div`
  background-image: url(${ImageBackground});
  background-attachment: fixed;
  height: max-content;
  align-content: center;
`

const Conteudo = styled.div`
    min-height: 100vh;
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const TituloPrincipal = styled.h2`
    font-size: 40px;
    color: #E9E9E9;
    border-bottom: 3px solid #E9E9E9;
    width: 90%;
    max-width: 1200px;
    padding-bottom: 5px;
    position: relative;
    top: 40px;
    margin: 40px 0 120px 0;
`

const CardSobre = styled.div`
    padding: 40px;
    border: 5px solid #00ffff7f;
    border-radius: 40px;
    text-align: justify;
    width: 90%;
    margin-bottom: 60px;
`

const Subtitulo = styled.h2`
    margin-bottom: 30px;
    font-weight: 800;
    font-size: 2rem;
`

const Paragrafo = styled.p`
    margin-bottom: 20px;
`

const ProjetosLi = styled.li`

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

const MaisInfo = styled.div`

`

function Sobre() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div>
            <ImgBackground>
                <Conteudo>
                    <TituloPrincipal>Apresentando-se</TituloPrincipal>
                    <CardSobre>
                        <Paragrafo><b>Nome:</b> Mateus L. Pereira</Paragrafo>

                        <Paragrafo><b>Cargo:</b> Técnico em Desenvolvimento de Sistemas, Freelancer Full-stack</Paragrafo>

                        <Paragrafo><b>Especialidade:</b> Desenvolvimento de páginas web com foco em Domain-Driven Design (DDD)</Paragrafo>
                        {isMobileMenuOpen && (
                            <div>
                                <Paragrafo><b>Nome:</b> Mateus L. Pereira</Paragrafo>

                                <Paragrafo><b>Cargo:</b> Técnico em Desenvolvimento de Sistemas, <br /> Freelancer Full-stack</Paragrafo>

                                <Paragrafo><b>Especialidade:</b> Desenvolvimento de páginas web <br /> com foco em Domain-Driven Design (DDD)</Paragrafo>
                            </div>
                        )}
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
                                : Simula o Youtube (<a href="https://www.alura.com.br/">Alura</a>).
                            </ProjetosLi>
                            <ProjetosLi>
                                <ProjetoLink href="https://organo-phi-beryl.vercel.app/" target="_blank"><b>ORGANO</b></ProjetoLink>
                                : Inscrição de cursos.
                            </ProjetosLi>
                            <ProjetosLi>
                                <ProjetoLink href="https://local-storage-ruddy.vercel.app/" target="_blank"><b>LOCAL STORANGE</b></ProjetoLink>
                                : Utiliza Storange do navegador.
                            </ProjetosLi>
                        </Paragrafo>

                        <MaisInfo>
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
                                LinkedIn: https://br.linkedin.com/in/mateus-lunkes-pereira-dev
                            </Paragrafo>

                            <Paragrafo>
                                Estou pronto para te ajudar a transformar suas ideias em soluções digitais inovadoras e eficientes!
                            </Paragrafo>

                            <Paragrafo>
                                Observações:

                                Este é apenas um modelo de documento. Adapte-o à sua realidade, incluindo seus projetos mais
                                relevantes,
                                suas habilidades e suas experiências.
                                Utilize uma linguagem clara, concisa e objetiva.
                                Destaque seus diferenciais e o que te torna um profissional único.
                                Apresente seus projetos de forma organizada e com resultados concretos.
                                Inclua um link para o seu portfólio online, onde os clientes podem ver mais detalhes sobre o seu
                                trabalho.
                                Mantenha seu portfólio atualizado com seus projetos mais recentes.
                            </Paragrafo>
                        </MaisInfo>
                    </CardSobre>
                </Conteudo>
            </ImgBackground>
        </div>
    )
}

export default Sobre;

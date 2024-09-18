import styled from "styled-components"
import ImageAluraTube from '../assets/images/screencapture-aluratube.png';
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from 'react-icons/fa';
import ImageBackground from '../assets/images/background-blue-color-square.jpg';

const ImgBackground = styled.div`
  background-image: url(${ImageBackground});
  background-attachment: fixed;
  height: 800px;
`

const Conteudo = styled.div`
    width: 100%;
    display: inline-flex;
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

const TituloH5 = styled.h5`
    font-size: x-large;
    font-weight: 400;
`

const CardText = styled.div`
    padding: 12px;
`

const Badge = styled.div`
    margin: 10px 0;
    display: flex;
    gap: 10px;
`

const BadgeReact = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: small;
    height: 20px;
    width: 60px;
    background-color: #0D6EFD;
    color: #fff;
    font-weight: 800;
`

const BadgeHtml = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: small;
    height: 20px;
    width: 60px;
    background-color: #DC3545;
    color: #fff;
    font-weight: 800;
`


const BadgeCss = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: small;
    height: 20px;
    width: 60px;
    background-color: #0DCAF0;
    color: #fff;
    font-weight: 800;
`

const ContainerProjetos = styled.div`

`

const CardProjetos = styled.div`
    width: 18rem;
    background-color: #FFF;
    border-radius: 10px;

    &:hover {
        border: 1px solid #4F46E5;
        box-shadow: #4F46E5 5px 5px 4px 0px;
    }
`

const ImgProject = styled.img`
    height: 285px;
    width: 100%;
    border-radius: 10px 10px 0 0;
`

const CardBody = styled.p`
    text-align: justify;    
    padding-bottom: 15px;
`

const IconsProjeto = styled.div`
display: flex;
gap: 20px;
`

const IconProjeto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    height: 40px;
    width: 40px;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }
`

function Projects() {
    return (
        <div>
            <ImgBackground>
                <Conteudo>
                    <TituloPrincipal>Projetos</TituloPrincipal>
                    <ContainerProjetos>
                        <CardProjetos>
                            <ImgProject src={ImageAluraTube} />
                            <CardText>
                                <TituloH5>AluraTube</TituloH5>
                                <Badge>
                                    <BadgeHtml>Html5</BadgeHtml>
                                    <BadgeCss>Css</BadgeCss>
                                    <BadgeReact>React</BadgeReact>
                                </Badge>
                                <CardBody class="card-text">
                                    Simula uma pagina do YouTube, sendo possível adicionar seus filmes favoritos.
                                    Porém os dados não ficam salvos devido a característica do React
                                </CardBody>
                                <IconsProjeto>
                                    <a href="https://aluratube-tan-five.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <IconProjeto>
                                            <CiGlobe size={32} color="white" />
                                        </IconProjeto>
                                    </a>
                                    <a href="https://github.com/mateuslph/aluratube" target="_blank" rel="noopener noreferrer">
                                        <IconProjeto>
                                            <FaGithub size={32} color="white" />
                                        </IconProjeto>
                                    </a>
                                </IconsProjeto>
                            </CardText>
                        </CardProjetos>
                    </ContainerProjetos>
                </Conteudo>
            </ImgBackground>
        </div>
    )
}

export default Projects;

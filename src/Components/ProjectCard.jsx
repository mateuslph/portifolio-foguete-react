import styled from "styled-components";
import ImageAluraTube from '../assets/images/screencapture-aluratube.png';
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from 'react-icons/fa';

const CardProjetos = styled.div`
    width: 18rem;
    background-color: #FFF;
    border-radius: 10px;

    &:hover {
        box-shadow: #4F46E5 5px 5px 4px 0px;
    }
`;

const TituloH5 = styled.h5`
    font-size: x-large;
    font-weight: 400;
`;

const CardText = styled.div`
    padding: 12px;
`;

const Badge = styled.div`
    margin: 10px 0;
    display: flex;
    gap: 10px;
`;

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
`;

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
`;

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
`;

const ImgProject = styled.img`
    height: 285px;
    width: 100%;
    border-radius: 10px 10px 0 0;
`;

const CardBody = styled.p`
    text-align: justify;
    padding-bottom: 15px;
`;

const IconsProjeto = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

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
`;

function ProjectCard({ project }) {
    return (
        <CardProjetos>
            <ImgProject src={project.image || ImageAluraTube} alt={project.title} />
            <CardText>
                <TituloH5>{project.title}</TituloH5>
                <Badge>
                    {project.badgeHtml && <BadgeHtml>{project.badgeHtml}</BadgeHtml>}
                    {project.badgeCss && <BadgeCss>{project.badgeCss}</BadgeCss>}
                    {project.badgeReact && <BadgeReact>{project.badgeReact}</BadgeReact>}
                </Badge>
                <CardBody>{project.description}</CardBody>
                <IconsProjeto>
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <IconProjeto>
                                <CiGlobe size={32} color="white" />
                            </IconProjeto>
                        </a>
                    )}
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <IconProjeto>
                                <FaGithub size={32} color="white" />
                            </IconProjeto>
                        </a>
                    )}
                </IconsProjeto>
            </CardText>
        </CardProjetos>
    );
}

export default ProjectCard;
import styled from "styled-components";
import ProjectCard from './ProjectCard';
import ImageBackground from '../assets/images/background-blue-color-square.jpg';
import ImageAluraTube from '../assets/images/screencapture-aluratube.png';
import { v4 as uuidv4 } from 'uuid';

const ImgBackground = styled.div`
  background-image: url(${ImageBackground});
  background-attachment: fixed;
  height: max-content;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    min-height: 900px;
    height: max-content;
  }
`;

const Conteudo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

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
`;

const ContainerProjetos = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 85vw;
  margin-bottom: 60px;
`;

function Projects() {
  const projectsData = [
    {
      id: uuidv4(),
      image: ImageAluraTube,
      title: "AluraTube 1",
      badgeHtml: "Html5",
      badgeCss: "Css",
      badgeReact: "React",
      description: "Simula uma pagina do YouTube, sendo possível adicionar seus filmes favoritos. Porém os dados não ficam salvos devido a característica do React.",
      liveLink: "https://aluratube-tan-five.vercel.app/",
      githubLink: "https://github.com/mateuslph/aluratube",
    },
    {
      id: uuidv4(),
      image: ImageAluraTube,
      title: "AluraTube 2",
      badgeHtml: "Html5",
      badgeCss: "Css",
      badgeReact: "React",
      description: "Simula uma pagina do YouTube, sendo possível adicionar seus filmes favoritos. Porém os dados não ficam salvos devido a característica do React.",
      liveLink: "https://aluratube-tan-five.vercel.app/",
      githubLink: "https://github.com/mateuslph/aluratube",
    },
    {
      id: uuidv4(),
      image: ImageAluraTube,
      title: "AluraTube 3",
      badgeHtml: "Html5",
      badgeCss: "Css",
      badgeReact: "React",
      description: "Simula uma pagina do YouTube, sendo possível adicionar seus filmes favoritos. Porém os dados não ficam salvos devido a característica do React.",
      liveLink: "https://aluratube-tan-five.vercel.app/",
      githubLink: "https://github.com/mateuslph/aluratube",
    },
    {
      id: uuidv4(),
      image: ImageAluraTube,
      title: "AluraTube 4",
      badgeHtml: "Html5",
      badgeCss: "Css",
      badgeReact: "React",
      description: "Simula uma pagina do YouTube, sendo possível adicionar seus filmes favoritos. Porém os dados não ficam salvos devido a característica do React.",
      liveLink: "https://aluratube-tan-five.vercel.app/",
      githubLink: "https://github.com/mateuslph/aluratube",
    },
    {
      id: uuidv4(),
      image: ImageAluraTube,
      title: "AluraTube 5",
      badgeHtml: "Html5",
      badgeCss: "Css",
      badgeReact: "React",
      description: "Simula uma pagina do YouTube, sendo possível adicionar seus filmes favoritos. Porém os dados não ficam salvos devido a característica do React.",
      liveLink: "https://aluratube-tan-five.vercel.app/",
      githubLink: "https://github.com/mateuslph/aluratube",
    },
    {
      id: uuidv4(),
      image: ImageAluraTube,
      title: "AluraTube 6",
      badgeHtml: "Html5",
      badgeCss: "Css",
      badgeReact: "React",
      description: "Simula uma pagina do YouTube, sendo possível adicionar seus filmes favoritos. Porém os dados não ficam salvos devido a característica do React.",
      liveLink: "https://aluratube-tan-five.vercel.app/",
      githubLink: "https://github.com/mateuslph/aluratube",
    },
    {
      id: uuidv4(),
      image: ImageAluraTube,
      title: "AluraTube 7",
      badgeHtml: "Html5",
      badgeCss: "Css",
      badgeReact: "React",
      description: "Simula uma pagina do YouTube, sendo possível adicionar seus filmes favoritos. Porém os dados não ficam salvos devido a característica do React.",
      liveLink: "https://aluratube-tan-five.vercel.app/",
      githubLink: "https://github.com/mateuslph/aluratube",
    },
    {
      id: uuidv4(),
      image: ImageAluraTube,
      title: "AluraTube 8",
      badgeHtml: "Html5",
      badgeCss: "Css",
      badgeReact: "React",
      description: "Simula uma pagina do YouTube, sendo possível adicionar seus filmes favoritos. Porém os dados não ficam salvos devido a característica do React.",
      liveLink: "https://aluratube-tan-five.vercel.app/",
      githubLink: "https://github.com/mateuslph/aluratube",
    },
    {
      id: uuidv4(),
      image: ImageAluraTube,
      title: "AluraTube 9",
      badgeHtml: "Html5",
      badgeCss: "Css",
      badgeReact: "React",
      description: "Simula uma pagina do YouTube, sendo possível adicionar seus filmes favoritos. Porém os dados não ficam salvos devido a característica do React.",
      liveLink: "https://aluratube-tan-five.vercel.app/",
      githubLink: "https://github.com/mateuslph/aluratube",
    },
    {
      id: uuidv4(),
      image: ImageAluraTube,
      title: "AluraTube 10",
      badgeHtml: "Html5",
      badgeCss: "Css",
      badgeReact: "React",
      description: "Simula uma pagina do YouTube, sendo possível adicionar seus filmes favoritos. Porém os dados não ficam salvos devido a característica do React.",
      liveLink: "https://aluratube-tan-five.vercel.app/",
      githubLink: "https://github.com/mateuslph/aluratube",
    },
  ];

  return (
    <div>
      <ImgBackground>
        <Conteudo>
          <TituloPrincipal>Projetos</TituloPrincipal>
          <ContainerProjetos>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ContainerProjetos>
        </Conteudo>
      </ImgBackground>
    </div>
  );
}

export default Projects;
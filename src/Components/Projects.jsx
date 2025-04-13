import styled from "styled-components";
import ProjectCard from './ProjectCard';
import ImageBackground from '../assets/images/background-blue-color-square.jpg';
import { v4 as uuidv4 } from 'uuid';

const Background = styled.div.attrs(props => ({
  style: { backgroundImage: `url(${props.image || ImageBackground})` }
}))`
  background-attachment: fixed;
  height: 100vh;

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
  margin: 80px 0 120px 0;
  font-weight: 600;
`;
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
      badgeHtml: "Html5",
      badgeCss: "Css",
      badgeReact: "React",
      description: "Simula uma pagina do YouTube, sendo possível adicionar seus filmes favoritos. Porém os dados não ficam salvos devido a característica do React.",
      liveLink: "https://aluratube-tan-five.vercel.app/",
      githubLink: "https://github.com/mateuslph/aluratube",
    },

    {
      id: uuidv4(), 
      badgeHtml: "Html5",
      badgeCss: "Css",
      description: "This is a new description for the AluraTube project. This is a great project.",
      liveLink: "https://new-aluratube-link.com",
      githubLink: "https://github.com/new-aluratube-github",
    },
    {
      id: uuidv4(),
      title: "Imersão Alura",
      badgeCss: "Css",
      description: "This is the new description for the third project.",
      liveLink: "https://new-project-link.com",
      githubLink: "https://github.com/new-project-github",
      image: './assets/images/background-blue-color-square.jpg',
    },
    {
      id: uuidv4(),
      image: './assets/images/background-blue-color-square.jpg',
      title: "My Portfolio New",
      badgeReact: "React",
      description: "This is my personal portfolio, where you can see all my projects, and learn a little bit about me.",
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
      <Background image={ImageBackground}>
        <Conteudo>
          <TituloPrincipal>Projetos</TituloPrincipal>
          <ContainerProjetos>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ContainerProjetos>
          </Conteudo>
      </Background>
    </div>
  );
}

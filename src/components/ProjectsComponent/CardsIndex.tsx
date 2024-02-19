import {
  CalcComponent,
  StrayArtist,
  adviceGenComp,
  oldPortfolio,
  solitaireGame,
  urlShortening,
} from "@/assets/indexProjectImage";
import ProjectCard from "@components/ProjectsComponent/ProjectCard";
const CardsIndex = ({ index }: { index: number }) => {
  const ProjectCards = [
    <ProjectCard
      title="Old web portfolio"
      image={oldPortfolio}
      githubLink="https://github.com/tulza/Tulza-dev-old"
      pageLink="https://tulza.github.io/Tulza-dev-old/"
      tags={["React", "Javascript", "Tailwind", "Framer motion", "HTML/CSS"]}
    />,
    <ProjectCard
      title="URL shortening page"
      image={urlShortening}
      githubLink="https://github.com/tulza/url-shortening-api"
      pageLink="https://tulza.github.io/url-shortening-api/#"
      tags={[
        "React",
        "Javascript",
        "Tailwind",
        "Responsive",
        "Post API",
        "HTML/CSS",
      ]}
    />,
    <ProjectCard
      image={adviceGenComp}
      title="Advice generator app"
      githubLink="https://github.com/tulza/frontend-mentor-challenges/tree/main/3.%20advice-generator-app-main"
      pageLink="https://tulza.github.io/frontend-mentor-challenges/3.%20advice-generator-app-main/index.html"
      tags={["HTML/CSS", "Javascript", "Rest API"]}
    />,
    <ProjectCard
      title="Calculator app component"
      githubLink="https://github.com/tulza/Calculator-app"
      pageLink="https://tulza.github.io/Calculator-app"
      image={CalcComponent}
      tags={["React", "Tailwind", "Typescript", "Framer motion", "Responsive"]}
    />,
    <ProjectCard
      title="python simplifed solitaire"
      image={solitaireGame}
      tags={["Python", "Turtle graphics"]}
    />,
    <ProjectCard
      title='"stray artist" platformer'
      image={StrayArtist}
      githubLink="https://github.com/tulza/Stray-Artist"
      tags={["C#", "Unity"]}
    />,
  ];
  return ProjectCards[index];
};

export default CardsIndex;

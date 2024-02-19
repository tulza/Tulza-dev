import {
  CalcComponent,
  StrayArtist,
  adviceGenComp,
  oldPortfolio,
  solitaireGame,
  urlShortening,
} from "@/assets/indexProjectImage";
import ProjectCard from "@components/ProjectsComponent/ProjectCard";

const ProjectCardsDesktop = () => {
  return (
    <div className="flex gap-4 lg:flex-col">
      <div className="flex h-[full] w-min gap-4 sm:flex-col lg:translate-x-[5%] lg:flex-row">
        <ProjectCard
          title="Old web portfolio"
          image={oldPortfolio}
          tags={[
            "React",
            "Javascript",
            "Tailwind",
            "Framer motion",
            "html/css",
          ]}
        />
        <ProjectCard
          title="URL shortening page"
          image={urlShortening}
          tags={[
            "React",
            "Javascript",
            "Tailwind",
            "Responsive",
            "Post api",
            "html/css",
          ]}
        />
        <ProjectCard
          image={adviceGenComp}
          title="Advice generator app"
          tags={["html/css", "Javascript", "RestAPI"]}
        />
      </div>
      <div className="flex h-[full] w-min gap-4 sm:flex-col lg:-translate-x-[5%] lg:flex-row">
        <ProjectCard
          title="Calculator app component"
          image={CalcComponent}
          tags={[
            "React",
            "Tailwind",
            "Typescript",
            "Framer motion",
            "Responsive",
          ]}
        />
        <ProjectCard
          title="python simplifed solitaire"
          image={solitaireGame}
          tags={["Python", "Turtle graphics"]}
        />
        <ProjectCard
          title='"stray artist" platformer'
          image={StrayArtist}
          tags={["C#", "Unity"]}
        />
      </div>
    </div>
  );
};

export default ProjectCardsDesktop;

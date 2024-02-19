import { useContext } from "react";
import HighlightedText from "@components/HighlightedText";
import ProjectCardsDesktop from "../ProjectsComponent/ProjectCardsDesktop";
import { ScreenProfileContext } from "@/App";
import ProjectCardsMobile from "@components/ProjectsComponent/ProjectCardsMobile";
import GraphBlock from "@components/ProjectsComponent/GraphBlock";

const ProjectSection = () => {
  const isDesktop = useContext(ScreenProfileContext);

  return (
    <div className="flex h-[2000px] w-full flex-col items-center">
      <div className="flex h-[full] flex-col items-center pt-[10rem]">
        <HighlightedText
          text="Projects"
          highlight="var(--green)"
          className="bold my-10 text-3xl"
        />
        {isDesktop ? <ProjectCardsDesktop /> : <ProjectCardsMobile />}
      </div>
      <div className="mt-20">
        <GraphBlock />
      </div>
    </div>
  );
};

export default ProjectSection;

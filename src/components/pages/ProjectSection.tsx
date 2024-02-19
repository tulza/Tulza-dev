import { useContext } from "react";
import HighlightedText from "@components/HighlightedText";
import ProjectCardsDesktop from "../ProjectsComponent/ProjectCardsDesktop";
import { ScreenProfileContext } from "@/App";
import ProjectCardsMobile from "@components/ProjectsComponent/ProjectCardsMobile";

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
      {/* <div className="mt-20 space-y-8">
        <div className="flex divide-x-[1px] divide-white sm:w-[600px] lg:w-[1000px]">
          <div className="bold mr-2 w-[100px]">React</div>
          <div className="grid h-[60px] w-full gap-4">
            <div className="ml-2 h-full w-full bg-white" />
            <div className="ml-2 h-full w-full bg-white" />
          </div>
        </div>
        <div className="flex divide-x-[1px] divide-white sm:w-[600px] lg:w-[1000px]">
          <div className="bold mr-2 w-[100px]">Javascript</div>
          <div className="grid h-[60px] w-full gap-4">
            <div className="ml-2 h-full w-full bg-white" />
            <div className="ml-2 h-full w-full bg-white" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProjectSection;

import React, { ForwardedRef, useContext } from "react";
import HighlightedText from "@components/HighlightedText";
import ProjectCardsDesktop from "./ProjectsComponent/ProjectCardsDesktop";
import { ScreenProfileContext } from "@/App";
import ProjectCardsMobile from "@pages/ProjectsComponent/ProjectCardsMobile";

const ProjectSection = React.forwardRef(
  (_, ref: ForwardedRef<HTMLDivElement>) => {
    const isDesktop = useContext(ScreenProfileContext);

    return (
      <div className="flex w-full flex-col items-center pb-40">
        <div className="flex h-[full] flex-col items-center" ref={ref}>
          <HighlightedText
            text="Projects"
            highlight="var(--green)"
            className="bold my-10 text-3xl"
          />
          {isDesktop ? <ProjectCardsDesktop /> : <ProjectCardsMobile />}
        </div>
        {/* <div className="mt-20">
          <GraphBlock />
        </div> */}
      </div>
    );
  },
);

export default ProjectSection;

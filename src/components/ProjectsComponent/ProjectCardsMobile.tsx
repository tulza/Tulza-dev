import { LeftArrow, RightArrow, UpArrow } from "@/assets/indexImage";
import {
  CalcComponent,
  StrayArtist,
  adviceGenComp,
  oldPortfolio,
  solitaireGame,
  urlShortening,
} from "@/assets/indexProjectImage";
import ProjectCard from "@components/ProjectsComponent/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCardsMobile = () => {
  const gap = 100;
  const width = 300;
  const totalItems = 6;

  const [focus, setFocus] = useState(5);
  const MoveButton = ({
    OnClick,
    image,
  }: {
    OnClick: () => void;
    image: string;
    className?: string;
  }) => {
    return (
      <motion.div
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 1.05 }}
        onClick={OnClick}
        className="flex aspect-square h-[50px] cursor-pointer select-none items-center justify-center rounded-xl p-2 outline outline-1"
      >
        <img src={image} className="h-full" />
      </motion.div>
    );
  };

  return (
    <div className="my-4 flex w-[100vw] flex-col items-center overflow-hidden py-4">
      <div className="flex w-[300px]">
        <motion.div
          className="flex"
          style={{ gap: gap }}
          animate={{ x: -(width + gap) * (focus - 1) }}
          transition={{ ease: "easeInOut" }}
        >
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
        </motion.div>
      </div>
      <div className="mt-8 flex gap-8">
        <MoveButton
          className="-rotate-90"
          image={LeftArrow}
          OnClick={() => {
            if (focus == 1) return;
            setFocus(focus - 1);
          }}
        />
        <div className="bold flex w-[50px] select-none items-center justify-center border-b-2">
          {focus}/{totalItems}
        </div>
        <MoveButton
          image={RightArrow}
          OnClick={() => {
            if (focus == 6) return;
            setFocus(focus + 1);
          }}
        />
      </div>
    </div>
  );
};

export default ProjectCardsMobile;

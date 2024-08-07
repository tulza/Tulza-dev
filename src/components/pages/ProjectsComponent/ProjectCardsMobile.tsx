import { LeftArrow, LeftArrowLM, RightArrow, RightArrowLM } from "@svg/index";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import CardsIndex from "./CardsIndex";
import { ThemeContext } from "@/App";

const ProjectCardsMobile = () => {
  const { theme } = useContext(ThemeContext);
  const gap = 100;
  const width = 300;
  const totalItems = 6;

  const [focus, setFocus] = useState(1);
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
          <CardsIndex index={0} />
          <CardsIndex index={1} />
          <CardsIndex index={2} />
          <CardsIndex index={3} />
          <CardsIndex index={4} />
          <CardsIndex index={5} />
        </motion.div>
      </div>
      <div className="mt-8 flex gap-8">
        <MoveButton
          className="-rotate-90"
          image={theme == "light" ? LeftArrowLM : LeftArrow}
          OnClick={() => {
            if (focus == 1) return;
            setFocus(focus - 1);
          }}
        />
        <div className="bold flex w-[50px] select-none items-center justify-center border-b-2">
          {focus}/{totalItems}
        </div>
        <MoveButton
          image={theme == "light" ? RightArrowLM : RightArrow}
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

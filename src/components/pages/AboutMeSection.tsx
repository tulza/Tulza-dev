import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import HighlightedText from "@components/HighlightedText";
import ButtonWrapper from "@components/Wrapper/ButtonWrapper";
import { ScreenProfileContext } from "@/App";
import { useContext } from "react";

const AboutMeSection = () => {
  const isDesktop = useContext(ScreenProfileContext);
  return (
    <div className="grid-background-50 flex h-[2000px] w-full flex-col items-center justify-center border-t pt-[5rem] sm:pt-[15rem]">
      <HighlightedText text="About me" className="bold my-10 text-3xl" />
      <div className="relative flex h-full w-[300px] justify-between gap-4 sm:w-[650px] lg:w-[1000px]">
        {isDesktop && <Menu />}
        <div className="mb-10 h-[1500px] w-full rounded-xl bg-[#252525] outline outline-1 outline-[#585858]"></div>
      </div>
    </div>
  );
};

const Menu = () => {
  const { scrollY } = useScroll();
  const ScrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(ScrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  // makes motion value smaller
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, -20], {
    clamp: false,
  });

  return (
    <motion.div
      className="sticky left-0 top-[calc(50%_-_200px)] h-min"
      style={{ y: velocityFactor }}
    >
      <div className="h-[300px] w-[200px] rounded-xl bg-[#252525] outline outline-1 outline-[#585858] lg:w-[300px]"></div>
      <div className="mt-4 flex justify-evenly">
        <ButtonWrapper className="rounded-full">
          <div className="flex h-[40px] w-[80px] items-center justify-center overflow-hidden rounded-full bg-[#252525] outline outline-1 outline-[#585858]">
            <motion.div
              className="aspect-square w-0 rounded-full bg-[#2c2c2c]"
              variants={{ hovered: { width: "100%" } }}
            />
          </div>
        </ButtonWrapper>
        <ButtonWrapper className="rounded-full">
          <div className="flex h-[40px] w-[80px] items-center justify-center overflow-hidden rounded-full bg-[#252525] outline outline-1 outline-[#585858]">
            <motion.div
              className="aspect-square w-0 rounded-full bg-[#2c2c2c]"
              variants={{ hovered: { width: "100%" } }}
            />
          </div>
        </ButtonWrapper>
      </div>
    </motion.div>
  );
};
export default AboutMeSection;

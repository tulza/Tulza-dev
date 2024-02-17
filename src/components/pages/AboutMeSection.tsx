import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import HighlightedText from "@components/HighlightedText";
import ButtonWrapper from "@components/Wrapper/ButtonWrapper";
import { ScreenProfileContext } from "@/App";
import { useContext, useEffect, useRef, useState } from "react";
import InViewWrapper from "@components/Wrapper/InViewWrapper";
import AnimatedText from "@components/AnimatedText";
import { AboutMeTextVariant } from "@/Framer/Variants";
import AboutCard from "@components/AboutCard";

const AboutMeSection = () => {
  const isDesktop = useContext(ScreenProfileContext);
  const waveAnimVariant = {
    Visible: { rotate: [0, 25, -25, 25, -25, 0] },
    Invisible: { rotate: 0 },
  };
  const contentRef = useRef(null);
  return (
    <>
      <div className="grid-background-50 flex h-[2000px] w-full flex-col items-center justify-start border-t pt-[6rem] sm:pt-[15rem]">
        <HighlightedText
          text="About me"
          highlight="var(--blue)"
          className="bold my-10 text-3xl"
        />
        <div className="text-lg sm:text-lg mb-20 w-[90%] px-3 text-center sm:w-[600px] lg:w-[1000px] lg:text-xl">
          <div className="text-3xl">
            <InViewWrapper
              delay={0.5}
              inViewVariant={waveAnimVariant}
              duration={1}
            >
              👋
            </InViewWrapper>
          </div>
          <AnimatedText
            className="flex-wrap justify-center"
            TextVariants={AboutMeTextVariant}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            staggerChildren={0.15}
            text="Hi, I'm a second-year university student and a self-taught web developer. My passion lies in the creation of UI/UX design, and animation to create beautiful visuals on the web."
          />
        </div>
        {/* history content */}
        <div
          ref={contentRef}
          className="relative flex h-min w-[300px] justify-between gap-4 sm:w-[650px] lg:w-[1000px]"
        >
          {isDesktop && <Menu parentRef={contentRef} />}
          <div className="mb-[56px] w-full divide-y divide-[#585858] rounded-xl bg-[#252525] px-6 py-4 outline outline-1 outline-[#585858] sm:px-12">
            <AboutCard
              titleElem={
                <>
                  2020-2022 <br />
                  <span className="text-lime-200">
                    Otago Bayfield Highschool
                  </span>
                </>
              }
              text={[
                "During my first senior year of highschool, I took my first computer science class during highschool and ever since has taken a liking to it.",
                "During the course of rest of highschool, I've created many basic terminal programs in C# and in the later year created unity games, and volunteered to become a technical support student.",
              ]}
            />
            <AboutCard
              titleElem={
                <>
                  July 2022 <br />
                  <span className="text-green">Otago GameJam Participant</span>
                </>
              }
              text="Working with as team of 4 during a 48 hour event to create a
                game with Unity and C# where i create UI assets and design stage
                layout"
            />
            <AboutCard
              titleElem={
                <>
                  2023-2024
                  <br />
                  <span className="text-blue">
                    Studying at University of Auckland
                  </span>
                </>
              }
              text="Working with as team of 4 during a 48 hour event to create a
                game with Unity and C# where i create UI assets and design stage
                layout"
            />
          </div>
        </div>
      </div>
      <div className="h-[1900px] w-full bg-gray-500"></div>
    </>
  );
};

const Menu = ({ parentRef }: { parentRef: any }) => {
  const [isMaxStick, setIsMaxStick] = useState(false);
  const { scrollY } = useScroll();
  const ScrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(ScrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  // makes motion value smaller
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    isMaxStick ? [0, 0] : [0, -20],
    {
      clamp: false,
    },
  );
  const menuRef = useRef(null);
  useEffect(() => {
    const IsTopOrBottom = () => {
      if (menuRef.current && parentRef.current) {
        const { offsetTop, offsetHeight } = menuRef.current;
        const { offsetHeight: parentOffsetHeight } = parentRef.current;
        if (
          offsetTop == 0 ||
          parentOffsetHeight - offsetHeight - offsetTop <= 0
        ) {
          setIsMaxStick(true);
        } else {
          setIsMaxStick(false);
        }
      }
      return;
    };
    addEventListener("scroll", IsTopOrBottom);
    return () => {
      removeEventListener("scroll", IsTopOrBottom);
    };
  });

  return (
    <motion.div
      className="sticky left-0 top-[calc(50%_-_200px)] h-min"
      style={{ y: velocityFactor }}
      ref={menuRef}
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

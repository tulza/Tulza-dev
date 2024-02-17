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
      <div className="grid-background-50 flex w-full flex-col items-center justify-start border-t pb-20 pt-[6rem] sm:pt-[15rem]">
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
          {/* mb-[56px] is magic number to get perfect alignment */}
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
                "During the course of rest of highschool years, I've created many basic terminal programs in C# later creating unity games, and volunteered to become a technical support student.",
              ]}
            />
            <AboutCard
              titleElem={
                <>
                  July 2022 <br />
                  <span className="text-green">Otago GameJam Participant</span>
                </>
              }
              text={[
                "I applied to play in a GameJam and worked with a team of 4 from my highschool.",
                "during this 48 hour event to create a game with Unity and C# where i had help create UI assets and design stage layout",
              ]}
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
              text={[
                "In early 2023, I moved to Auckland with my family and began my studies at the University of Auckland, majoring in Computer science BSc.",
                "In my first year, studied computer theory and math, learnt to programmed in python, and learnt basic data structures such as stack, queues, binary tree, and hashtables",
              ]}
            />
            <AboutCard
              titleElem={
                <>
                  2023-2024
                  <br />
                  <span className="text-cyan-300">My WebDev journey</span>
                </>
              }
              text={[
                "Between my school breaks I've set myself a goal to become better at web development, because of my passion on designing which have led me to start mimic components from front end mentor challenges.",
                "Ever since I have tried to keep up my work ethics by working something to improve my skills every day which have led up to this website.",
                "During my first few weeks I have worked with html/css/javascript and later adapted to using React, Framer motion, and then Typescript.",
              ]}
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

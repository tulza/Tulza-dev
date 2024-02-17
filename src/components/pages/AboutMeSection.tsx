import HighlightedText from "@components/HighlightedText";

import InViewWrapper from "@components/Wrapper/InViewWrapper";
import AnimatedText from "@components/AnimatedText";
import { AboutMeTextVariant, waveAnimVariant } from "@/Framer/Variants";

import AboutMeContents from "@components/AboutMeComponents/AboutMeContents";

const AboutMeSection = () => {
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
        <AboutMeContents />
      </div>
      <div className="h-[1900px] w-full bg-gray-500"></div>
    </>
  );
};

export default AboutMeSection;

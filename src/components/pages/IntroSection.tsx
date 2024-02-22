import { motion } from "framer-motion";
import React, { ForwardedRef, useContext } from "react";

import { ScreenProfileContext } from "@/App";

import NavigationBar from "@components/Navigation/NavigationBar";
import MobileNavigation from "@components/Navigation/MobileNav";

import IntroText from "@components/IntroText";
import MoblieIntroText from "@components/MoblieIntroText";
import AnimatedText from "@components/AnimatedText";
import SliderIntroText from "@components/SliderIntroText";
import { IntroTextVariant } from "@/Framer/Variants";
import BackgroundBlurObject from "@components/BackgroundBlurObject";

import {
  HtmlCssIcon,
  ReactIcon,
  TailwindIcon,
  FramerMotionIcon,
  FigmaIcon,
  TypescriptIcon,
  StoryBookIcon,
} from "@/assets/indexIconImages";
import ThemeButton from "@components/ThemeButton";

const IntroSection = React.forwardRef(
  (_, ref: ForwardedRef<HTMLDivElement>) => {
    const isDesktop = useContext(ScreenProfileContext);
    const items = [
      "Html/Css",
      "React",
      "Tailwind",
      "Framer-motion",
      "Typescript",
      "StoryBook",
      "Figma",
    ];
    const icons = [
      HtmlCssIcon,
      ReactIcon,
      TailwindIcon,
      FramerMotionIcon,
      TypescriptIcon,
      StoryBookIcon,
      FigmaIcon,
    ];

    return (
      <div className="relative h-[100vh] overflow-hidden" ref={ref}>
        {isDesktop && (
          <div className="absolute -z-10 h-full w-full">
            <motion.div
              className="relative h-full w-full"
              animate={{ x: ["0%", "-5%", "5%", "0%"], rotate: [0, -6, 6, 0] }}
              transition={{ ease: "easeInOut", duration: 10, repeat: Infinity }}
            >
              <BackgroundBlurObject className="left-0 top-[50%] translate-y-[-100%]" />
              <BackgroundBlurObject className="right-0 translate-x-[50%] translate-y-[50%]" />
              <BackgroundBlurObject className="bottom-0 right-[25%] translate-x-[50%] translate-y-[50%]" />
              <BackgroundBlurObject className="bottom-0 left-0 translate-x-[-50%] translate-y-[50%]" />
            </motion.div>
          </div>
        )}
        <div className="flex w-full justify-center sm:mt-[2rem]">
          {isDesktop ? <NavigationBar /> : <MobileNavigation />}
        </div>

        <div className="pointer-events-none mt-[6rem] flex h-[100vh] select-none flex-col items-start pb-[10rem] sm:mt-[0rem] sm:items-center sm:justify-center">
          <div>
            {isDesktop ? <IntroText /> : <MoblieIntroText />}
            <div className="nsm:flex nsm:w-[100vw] nsm:justify-center">
              <div className="flex flex-col sm:flex-row sm:text-xl lg:text-2xl">
                <AnimatedText
                  text="self-taught web developer working with"
                  TextVariants={IntroTextVariant}
                  delayChild={1} //1
                />
                {isDesktop ? <>&nbsp;</> : <hr />}
                <motion.div
                  className="bold w-full justify-start text-2xl sm:text-2xl"
                  initial="initial"
                  animate="animate"
                  variants={IntroTextVariant}
                  transition={{ delay: 1.8 }} //1.8
                >
                  <SliderIntroText
                    className="text-center sm:text-left sm:text-xl lg:text-2xl nsm:mt-8"
                    itemClassName="nsm:justify-center"
                    items={items}
                    icons={icons}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default IntroSection;

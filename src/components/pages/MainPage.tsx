import NavigationBar from "@components/Navigation/NavigationBar";
import { useContext } from "react";
import { ScreenProfileContext } from "@/App";
import MobileNavigation from "@components/Navigation/MobileNav";
import IntroText from "@components/IntroText";
import MoblieIntroText from "@components/MoblieIntroText";
import AnimatedText from "@components/AnimatedText";
import { IntroTextVariant } from "@/Framer/Variants";
import { motion } from "framer-motion";
import SliderIntroText from "@components/SliderIntroText";

const MainPage = () => {
  const isMobile = useContext(ScreenProfileContext);
  const items = [
    "Html/Css",
    "React",
    "Tailwind",
    "Framer-motion",
    "Typescript",
    "StoryBook",
  ];

  return (
    <div>
      <div className="mt-[1rem] flex w-full justify-center sm:mt-[2rem]">
        {isMobile ? <NavigationBar /> : <MobileNavigation />}
      </div>
      <div className="mt-[6rem] flex h-[100vh] flex-col items-start pb-[10rem] sm:mt-[0rem] sm:items-center sm:justify-center">
        <div>
          <div>{isMobile ? <IntroText /> : <MoblieIntroText />}</div>
          <div className="nsm:flex nsm:w-[100vw] nsm:justify-center">
            <div className="flex flex-col sm:flex-row sm:text-2xl">
              <AnimatedText
                text="self-taught web developer working with"
                TextVariants={IntroTextVariant}
                delayChild={1} //1
              />
              {isMobile ? <>&nbsp;</> : <hr />}
              <motion.div
                className="bold flex h-min text-3xl sm:text-2xl nsm:justify-center"
                initial="initial"
                animate="animate"
                variants={IntroTextVariant}
                transition={{ delay: 1.8 }} //1.8
              >
                <SliderIntroText
                  className="text-center sm:text-left"
                  items={items}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

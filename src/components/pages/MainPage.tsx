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

  return (
    <div>
      <div className="mt-[1rem] flex w-full justify-center sm:mt-[2rem]">
        {isMobile ? <NavigationBar /> : <MobileNavigation />}
      </div>
      <div className="mt-[6rem] flex h-[100vh] flex-col items-start pb-[10rem] sm:mt-[0rem] sm:items-center sm:justify-center">
        <div>
          <div>{isMobile ? <IntroText /> : <MoblieIntroText />}</div>
          <div className="flex sm:text-2xl">
            <AnimatedText
              className="ml-4 self-start sm:ml-0"
              text="self-taught web developer working with"
              TextVariants={IntroTextVariant}
              delayChild={1}
            />
            &nbsp;
            <motion.div
              initial="initial"
              animate="animate"
              variants={IntroTextVariant}
              transition={{ delay: 0 }}
            >
              <SliderIntroText />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

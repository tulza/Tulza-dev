import Hero from '@sections/Hero';
import NavigationBar from '@components/navigation/NavigationBar';
import { createContext, useContext, useState } from 'react';
import ThemeSheet from '@components/Themes/ThemeSheet';
import SectionSplit from '@components/SectionSplit';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import GradientButton from '@components/GradientButton';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import AppDebug from './assets/deb/AppDebug';
import AboutMe from '@sections/AboutMe';
import ThemeButton from '@components/Themes/ThemeButton';
// import { EnterWebsiteAnimation } from '@components/EnterWebsiteAnimation';

interface themeContext {
  openTheme: boolean;
  toggleThemeSheet: () => void;
}
const ThemeContext = createContext({} as themeContext);
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!Object.keys(context).length) {
    throw new Error('useTheme must be used in a themeProvider');
  }
  return context;
};

const DEBUG = false;

function App() {
  const [openTheme, setOpenTheme] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  const hideNextButton = useSpring(useTransform(scrollY, [0, 200], [1, 0]));
  const showTheme = useSpring(useTransform(scrollY, [0, 200], [0, 1]));
  const toggleThemeSheet = () => {
    setOpenTheme(!openTheme);
  };

  const IntroDelay = 1;
  return (
    <>
      {/* <EnterWebsiteAnimation transitionTime={IntroDelay} /> */}
      <ThemeContext.Provider value={{ openTheme, toggleThemeSheet }}>
        {DEBUG && <AppDebug openTheme={openTheme} scrollYProgress={scrollYProgress} />}
        <motion.div
          style={{ opacity: showTheme }}
          className="fixed bottom-4 right-4 z-50 flex items-center justify-center gap-2"
        >
          <ThemeButton />
          <GradientButton>
            <ArrowBigUp />
          </GradientButton>
        </motion.div>
        <ThemeSheet />
        <NavigationBar />
        <Hero delay={IntroDelay} />
        <SectionSplit>
          <GradientButton
            className="absolute top-[0%]"
            onClick={() => {
              window.location.href = '#aboutme';
            }}
            style={{ opacity: hideNextButton }}
          >
            <ArrowBigDown className="mx-2" />
          </GradientButton>
        </SectionSplit>
        <AboutMe />
        {/* <div className="h-[400px] w-full bg-white"></div> */}
      </ThemeContext.Provider>
    </>
  );
}

export default App;

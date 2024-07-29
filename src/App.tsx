import Hero from '@sections/Hero';
import NavigationBar from '@components/navigation/NavigationBar';
import { createContext, useContext, useRef, useState } from 'react';
import ThemeSheet from '@components/Themes/ThemeSheet';
import SectionSplit from '@components/SectionSplit';
import { ArrowBigDown } from 'lucide-react';
import GradientButton from '@components/GradientButton';
import { useScroll } from 'framer-motion';
import AppDebug from './assets/deb/AppDebug';
import AboutMe from '@sections/AboutMe';
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
  const { scrollYProgress } = useScroll();
  const toggleThemeSheet = () => {
    setOpenTheme(!openTheme);
  };
  const IntroDelay = 1;
  return (
    <>
      {/* <EnterWebsiteAnimation transitionTime={IntroDelay} /> */}
      <ThemeContext.Provider value={{ openTheme, toggleThemeSheet }}>
        {DEBUG && <AppDebug openTheme={openTheme} scrollYProgress={scrollYProgress} />}
        <ThemeSheet />
        <NavigationBar />
        <Hero delay={IntroDelay} />
        <SectionSplit>
          <GradientButton
            className="absolute top-[0%]"
            onClick={() => {
              window.location.href = '#aboutme';
            }}
          >
            <ArrowBigDown className="mx-2" />
          </GradientButton>
        </SectionSplit>
        <AboutMe />
        <div className="h-[400px] w-full bg-white"></div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

import Hero from '@sections/Hero';
import Navigation from '@components/navigation/Navigation';
import { createContext, useContext, useState } from 'react';
import ThemeSheet from '@components/Themes/ThemeSheet';
import SectionSplit from '@components/SectionSplit';
import { ArrowBigDown } from 'lucide-react';
import GradientButton from '@components/GradientButton';
import AnimatedTextSequence from '@components/AnimatedTextSequence';
import { AboutMeIntro, AboutMeIntro2 } from '@texts/index';
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

function App() {
  const [openTheme, setOpenTheme] = useState(false);

  const toggleThemeSheet = () => {
    setOpenTheme(!openTheme);
  };

  const IntroDelay = 1;
  return (
    <>
      {/* <EnterWebsiteAnimation transitionTime={IntroDelay} /> */}
      <ThemeContext.Provider value={{ openTheme, toggleThemeSheet }}>
        <ThemeSheet />
        <Navigation />
        <Hero delay={IntroDelay} />
        <SectionSplit>
          <GradientButton
            className="absolute top-[0%]"
            onClick={() => {
              window.location.href = '#aboutMe';
            }}
          >
            <ArrowBigDown className="mx-2" />
          </GradientButton>
        </SectionSplit>
        <div className="mt-16 flex h-[2000px] flex-col items-center" id="aboutMe">
          <div className="mt-16 flex h-min w-full *:flex *:flex-col *:items-center *:justify-center *:bg-black/20 *:px-12 *:py-10 *:ring-1 *:ring-white/20">
            <div className="gap-1">
              <p className="whitespace-nowrap text-2xl font-bold">About me</p> <p>👋</p>
            </div>
            <div className="flex grow text-xl">
              <AnimatedTextSequence textJSON={AboutMeIntro} />
              <AnimatedTextSequence textJSON={AboutMeIntro2} />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

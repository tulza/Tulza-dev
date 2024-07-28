import Hero from '@sections/Hero';
import Navigation from '@components/navigation/Navigation';
import { createContext, useContext, useState } from 'react';
import ThemeSheet from '@components/Themes/ThemeSheet';
import { EnterWebsiteAnimation } from '@components/EnterWebsiteAnimation';
import SectionSplit from '@components/SectionSplit';
import { cn } from '@lib/utils';
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
          <p
            className={cn(
              'group relative p-2 text-white',
              'before:absolute before:-bottom-0 before:left-[10%] before:-z-10 before:h-[70%] before:w-full before:bg-black before:transition-all before:duration-500 hover:before:h-[20%]'
            )}
          >
            About mesdsd
          </p>
        </SectionSplit>
        <div className="h-[2000px]"></div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

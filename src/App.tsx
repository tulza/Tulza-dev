import { domAnimation, LazyMotion } from 'framer-motion';

import Hero from '@sections/Hero';
import Navigation from '@components/Navigation';
import { createContext, useContext, useState } from 'react';
import ThemeSheet from '@components/ThemeSheet';
import { EnterWebsiteAnimation } from '@components/EnterWebsiteAnimation';

interface themeContext {
  openTheme: boolean;
  handleToggleTheme: () => void;
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

  const handleToggleTheme = () => {
    setOpenTheme(!openTheme);
  };

  const IntroDelay = 4;
  return (
    <>
      <ThemeContext.Provider value={{ openTheme, handleToggleTheme }}>
        <LazyMotion features={domAnimation}>
          <ThemeSheet />
          <EnterWebsiteAnimation transitionTime={IntroDelay} />
          <Navigation />
          <Hero delay={IntroDelay} />
          <div className="via-background absolute z-10 h-[300px] w-dvw -translate-y-[50%] bg-gradient-to-t from-transparent to-transparent" />
          <div className="h-[2000px]"></div>
        </LazyMotion>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

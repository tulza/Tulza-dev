import { domAnimation, LazyMotion } from 'framer-motion';

import Hero from '@sections/Hero';
import Navigation from '@components/Navigation';
import { createContext, useState } from 'react';
import ThemeDock from '@components/ThemeDock';

interface themeContext {
  handleToggleTheme: () => void;
}
export const ThemeContext = createContext({} as themeContext);

function App() {
  const [openTheme, setOpenTheme] = useState(false);

  const handleToggleTheme = () => {
    setOpenTheme(!openTheme);
  };

  const IntroDelay = 0;
  return (
    <>
      <ThemeContext.Provider value={{ handleToggleTheme }}>
        <ThemeDock />
        <LazyMotion features={domAnimation}>
          {/* <EnterWebsiteAnimation transitionTime={IntroDelay} /> */}
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

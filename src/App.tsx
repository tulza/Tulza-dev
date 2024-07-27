import { domAnimation, LazyMotion } from 'framer-motion';

import { EnterWebsiteAnimation } from '@components/EnterWebsiteAnimation';
import Hero from '@sections/Hero';
import Navigation from '@components/Navigation';

function App() {
  const IntroDelay = 0;
  return (
    <LazyMotion features={domAnimation}>
      {/* <EnterWebsiteAnimation transitionTime={IntroDelay} /> */}
      <Navigation />
      <Hero delay={IntroDelay} />
      <div className="absolute z-10 h-[300px] w-dvw -translate-y-[50%] bg-gradient-to-b from-gray-900/0 via-gray-900 to-gray-900/0" />
      <div className="h-[2000px]"></div>
    </LazyMotion>
  );
}

export default App;

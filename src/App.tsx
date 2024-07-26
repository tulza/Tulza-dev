import { domAnimation, LazyMotion } from 'framer-motion';

import { EnterWebsiteAnimation } from '@components/EnterWebsiteAnimation';
import Hero from '@sections/Hero';

function App() {
  const IntroDelay = 0;
  return (
    <LazyMotion features={domAnimation}>
      <EnterWebsiteAnimation transitionTime={IntroDelay} />
      <div className="text-foreground flex h-[4000px] w-dvw flex-col items-center overflow-x-hidden bg-gray-900">
        <Hero delay={IntroDelay} />
      </div>
    </LazyMotion>
  );
}

export default App;

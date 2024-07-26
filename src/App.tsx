import { domAnimation, LazyMotion, m } from 'framer-motion';

import { WelcomeText } from './components/WelcomeText';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="text-foreground flex min-h-dvh w-dvw flex-col items-center overflow-x-hidden">
        <m.div className="flex h-dvh w-dvw flex-col items-center justify-center">
          <WelcomeText />
        </m.div>
      </div>
    </LazyMotion>
  );
}

export default App;

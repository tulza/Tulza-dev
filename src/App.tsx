import { domAnimation, LazyMotion } from 'framer-motion';
import { AnimatedText } from './components/AnimatedText';
import { smoothTextBlur } from './data/variants/animations';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="text-foreground flex min-h-dvh w-dvw flex-col items-center overflow-x-hidden">
        <div className="flex h-dvh w-dvw items-center justify-center">
          <AnimatedText
            text="hiiii!iiiiiiiii!iiiiii!"
            className="text-3xl"
            textAnimation={{ ...smoothTextBlur }}
            transition={{ staggerChildren: 0.1 }}
          />
        </div>
      </div>
    </LazyMotion>
  );
}

export default App;

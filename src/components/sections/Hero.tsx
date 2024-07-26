import AnimatedTextSequence from '@components/AnimatedTextSequence';
import DevToolsSlide from '@components/DevToolsSlide';
import { HeroDescription, HeroText } from '@data/texts/index';

const Hero = ({ delay = 0 }: { delay?: number }) => {
  return (
    <div className="flex h-dvh w-desktop items-center justify-center text-white">
      <div className="select-none">
        <AnimatedTextSequence
          textJSON={HeroText}
          className="textStroke text-7xl font-bold"
          delay={delay}
        />
        <div className="p3d mt-4 flex text-2xl">
          <AnimatedTextSequence textJSON={HeroDescription} delay={delay + 1.25} />
          <DevToolsSlide />
        </div>
      </div>
    </div>
  );
};

export default Hero;

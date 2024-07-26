import AnimatedTextSequence from '@components/AnimatedTextSequence';
import { HeroText } from '@data/texts/index';

const Hero = () => {
  return (
    <div className="flex h-dvh w-desktop items-center justify-center text-white">
      <div>
        <AnimatedTextSequence textJSON={HeroText} className="textStroke text-6xl font-bold" />
        <AnimatedTextSequence textJSON={HeroText} className="textStroke text-6xl font-bold" />
      </div>
    </div>
  );
};

export default Hero;

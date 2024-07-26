import AnimatedTextSequence from '@components/AnimatedTextSequence';
import DevToolsSlide from '@components/DevToolsSlide';
import { HeroDescription, HeroText } from '@data/texts/index';
import { cn } from '@lib/utils';
import { m } from 'framer-motion';

const Hero = ({ delay = 0 }: { delay?: number }) => {
  return (
    <div className="flex h-dvh w-desktop items-center justify-center text-white">
      <div className="h-min select-none">
        <div className="absolute left-[50%] top-[50%] h-0 w-0 origin-center -translate-x-[50%] -translate-y-[50%]">
          <m.div
            className={cn(
              'absolute grid h-0 w-0 place-items-center',
              '*:h-[2000px] *:w-[300px] *:rotate-[20deg]'
            )}
            animate={{ rotate: [0, 15, 0, -15, 0] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
          >
            <div className="absolute left-[-1500px] top-[-200px] -translate-y-[50%] rounded-full bg-[#234272]/50 blur-[200px]" />
            <div className="absolute left-[1500px] top-[200px] -translate-y-[50%] rounded-full bg-[#234272]/50 blur-[200px]" />
            <div className="absolute left-[500px] top-[-200px] -translate-y-[50%] rounded-full bg-[#234272]/50 blur-[200px]" />
            <div className="absolute left-[-500px] top-[200px] -translate-y-[50%] rounded-full bg-[#234272]/50 blur-[200px]" />
          </m.div>
        </div>
        <AnimatedTextSequence
          textJSON={HeroText}
          className="textStroke text-8xl font-bold"
          delay={delay}
        />
        <div className="p3d mt-4 flex text-2xl">
          <AnimatedTextSequence
            textJSON={HeroDescription}
            delay={delay + 1.25}
            textStagger={0.05}
          />
          <DevToolsSlide delay={delay + 4.5} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import AnimatedTextSequence from '@components/AnimatedTextSequence';
import DevToolsSlide from '@components/DevToolsSlide';
import { HeroDescription, HeroText } from '@data/texts/index';
import { AnimationProps, motion, MotionStyle } from 'framer-motion';
import { memo } from 'react';

const Hero = ({ delay = 0 }: { delay?: number }) => {
  return (
    <div className="relative flex h-dvh w-dvw items-center justify-center overflow-hidden text-white">
      <div className="h-min select-none">
        <Blobs />
        <BgGradient />
        <AnimatedTextSequence
          textJSON={HeroText}
          className="textStroke text-8xl font-bold"
          delay={delay - 0.5}
        />
        <div className="p3d mt-4 flex text-2xl text-foreground">
          <AnimatedTextSequence
            textJSON={HeroDescription}
            delay={delay + 0.75}
            textStagger={0.05}
          />
          <DevToolsSlide delay={delay + 4} />
        </div>
      </div>
    </div>
  );
};

const BgGradient = memo(() => (
  <div className="w-d absolute left-[50%] top-[50%] h-0 w-0 origin-center -translate-x-[50%] -translate-y-[50%]">
    <motion.div
      className="absolute grid h-0 w-0 place-items-center *:h-[4000px] *:w-[300px] *:-translate-y-[50%] *:rotate-[20deg] *:rounded-full *:bg-secondary *:blur-[250px]"
      animate={{ rotate: [0, 30, 0, -30, 0] }}
      transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
    >
      <div className="absolute left-[-1500px] top-[-200px]" />
      <div className="absolute left-[1500px] top-[200px]" />
      <div className="absolute left-[500px] top-[-200px]" />
      <div className="absolute left-[-500px] top-[200px]" />
    </motion.div>
  </div>
));

interface BlobProps extends AnimationProps {
  style?: MotionStyle;
}
const Blob = ({ style, ...props }: BlobProps) => {
  return (
    <motion.svg
      {...props}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      style={style}
      className="absolute w-full"
      width="740"
      height="845"
      viewBox="0 0 740 845"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transition={{ repeat: Infinity, ease: 'linear', ...props.transition }}
    >
      <motion.path
        className="stroke-foreground"
        d="M696.507 423.232L696.528 423.269L696.551 423.306C735.89 485.086 745.25 542.123 734.167 592.924C723.076 643.763 691.469 688.553 648.514 725.708C562.568 800.05 431.566 843.5 330.458 843.5C229.511 843.5 147.325 798.329 90.3362 724.092C33.3237 649.826 1.5 546.418 1.5 430.006C1.5 313.592 33.3254 206.416 90.3573 128.386C147.369 50.3831 229.557 1.5 330.458 1.5C381.084 1.5 417.686 7.39082 447.019 21.2283C476.319 35.0503 498.517 56.8739 520.199 89.038C541.907 121.24 563.028 163.696 590.229 218.717L592.108 222.519C618.945 276.808 651.687 343.043 696.507 423.232Z"
        strokeWidth="3"
      />
    </motion.svg>
  );
};

const Blobs = memo(() => {
  return (
    <div className="absolute left-[50%] top-0 aspect-square w-[600px] -translate-x-[50%] -translate-y-[100%]">
      <Blob transition={{ duration: 7 }} />
      <Blob style={{ scale: 0.9, filter: 'blur(3px)' }} transition={{ duration: 11 }} />
      <Blob style={{ scale: 1.1, filter: 'blur(6px)' }} transition={{ duration: 19 }} />
    </div>
  );
});

export default Hero;

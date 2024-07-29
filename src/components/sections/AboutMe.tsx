import AnimatedTextSequence from '@components/AnimatedTextSequence';
import { AboutMeIntro, AboutMeIntro2, AboutMeIntro3 } from '@texts/index';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutMe = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const TranslateBox = useSpring(useTransform(scrollYProgress, [0.05, 0.95], [0, -1600]), {
    bounce: 0.5,
    damping: 20,
    stiffness: 100,
  });
  const background = useTransform(
    scrollYProgress,
    [0, 0.9],
    [
      'linear-gradient(180deg, hsl(var(--secondary)) 0%, transparent 100%)',
      'linear-gradient(180deg, transparent 0%, hsl(var(--secondary)) 100%)',
    ]
  );

  return (
    <motion.div
      // change the px offset to change scroll speed
      className="mt-16 flex h-[calc(100vh+3000px)] flex-col items-center bg-background"
      id="aboutme"
      style={{ background }}
      ref={ref}
    >
      <div className="sticky top-0 flex h-dvh w-full flex-col">
        <AboutMeHeader />
        <div className="relative flex h-full w-full items-center overflow-x-hidden">
          <motion.div
            className="items-center*:ring-1 absolute left-[calc(50%-400px)] flex *:ring-white/20"
            style={{ translateX: TranslateBox }}
          >
            <div className="h-[400px] w-[800px] p-6 ring-1">a</div>
            <div className="h-[400px] w-[800px] p-6 ring-1">b</div>
            <div className="h-[400px] w-[800px] p-6 ring-1">c</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const AboutMeHeader = () => (
  <div className="mt-4 flex h-min w-full flex-col *:flex *:flex-col *:items-center *:justify-center *:bg-black/20 *:px-12 *:py-10 *:ring-1 *:ring-secondary/70 lg:flex-row">
    <div className="gap-1">
      <p className="whitespace-nowrap text-2xl font-bold">About me</p>{' '}
      <p className="text-4xl">👋</p>
    </div>
    <div className="flex grow flex-col justify-center text-sm sm:text-xl">
      <AnimatedTextSequence textJSON={AboutMeIntro} textStagger={0.03} />
      <div className="flex flex-col items-center xl:flex-row">
        <AnimatedTextSequence textJSON={AboutMeIntro2} delay={2} textStagger={0.03} />
        <AnimatedTextSequence textJSON={AboutMeIntro3} delay={4} textStagger={0.03} />
      </div>
    </div>
  </div>
);

export default AboutMe;

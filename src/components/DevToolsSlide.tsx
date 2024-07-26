import { DevTools } from '@data/miscs';
import { m, Transition, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const devsTools = Array.from(DevTools);
const toolsLength = devsTools.length;

const textVariantOut: Variants = {
  inital: { y: '0%', opacity: 1 },
  animate: { y: '-70%', opacity: 0, rotateX: '80deg', filter: 'blur(4px)' },
};
const textVariantIn: Variants = {
  inital: { y: '0%', opacity: 0 },
  animate: { y: '-100%', opacity: 1 },
};

const textTransition: Transition = {
  duration: 0.75,
  type: 'spring',
  damping: 10,
  stiffness: 75,
};

const DevToolsSlide = () => {
  const [index, setIndex] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1750);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIndex((prevs) => prevs.map((item) => (item + 1) % toolsLength));
  };

  return (
    <div className="bg-white/20">
      <m.div
        className="absolute flex flex-col whitespace-nowrap font-bold *:flex"
        key={index[0]}
        initial="inital"
        animate="animate"
      >
        <m.span variants={textVariantOut} transition={textTransition}>
          {devsTools[index[0]].tool}
          <img src="" className="ml-2 aspect-square w-10" />
        </m.span>
        <m.span variants={textVariantIn} transition={textTransition}>
          {devsTools[index[1]].tool}
          <img src="" className="ml-2 aspect-square w-10" />
        </m.span>
      </m.div>
    </div>
  );
};

export default DevToolsSlide;

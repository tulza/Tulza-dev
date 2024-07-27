import { DevTools } from '@data/miscs';
import { blurIn, fadeIn, mergeAnimation, pop, slideIn } from '@variants/animations';
import { motion, Transition, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const devsTools = Array.from(DevTools);
const toolsLength = devsTools.length;
const textVariantOut: Variants = {
  inital: { y: '0%', opacity: 1 },
  animate: { y: '-150%', opacity: 0, rotateX: '45deg', filter: 'blur(4px)', z: '-25px' },
};
const textVariantIn: Variants = {
  inital: { y: '0%', opacity: 0 },
  animate: { y: '-100%', opacity: 1 },
};

const textTransition: Transition = {
  type: 'spring',
  damping: 10,
  stiffness: 50,
};

const DevToolsSlide = ({ delay }: { delay: number }) => {
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ ...mergeAnimation([fadeIn, pop, blurIn, slideIn]) }}
      transition={{ delay }}
    >
      <motion.div
        className="p3d absolute flex flex-col whitespace-nowrap font-bold *:flex *:max-h-min"
        key={index[0]}
        initial="inital"
        animate="animate"
      >
        <motion.span variants={textVariantOut} transition={textTransition}>
          {devsTools[index[0]].tool}
          <span className="relative grid w-12 place-items-center">
            <img src={devsTools[index[0]].icon} className="absolute right-0 aspect-square w-10" />
          </span>
        </motion.span>
        <motion.span variants={textVariantIn} transition={textTransition}>
          {devsTools[index[1]].tool}
          <span className="relative grid w-12 place-items-center">
            <img src={devsTools[index[1]].icon} className="absolute right-0 aspect-square w-10" />
          </span>
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default DevToolsSlide;

import { m } from 'framer-motion';
import { IntroDescription, IntroText } from '../data';
import { smoothTextBlur, typingAnim } from '../data/variants/animations';
import { cn, nextTextDelayTime, timeTextDelay } from '../lib/utils';
import { AnimatedText } from './AnimatedText';
import { useRef } from 'react';

const delay = 0.075;

const delays1 = timeTextDelay(
  Array.from(IntroText).map((item) => item.text),
  delay,
  delay
);

export const WelcomeText = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleDeleteSelf = () => {
    if (!ref) return;
    ref.current?.remove();
  };
  return (
    <m.div
      ref={ref}
      className="fixed z-[9999] flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gray-800"
      animate={{ height: 0, filter: 'blur(8px)' }}
      transition={{ delay: 5.5 }}
      onAnimationComplete={handleDeleteSelf}
    >
      <div className="absolute top-0 z-10 h-[10%] w-full bg-black" />
      <div className="absolute bottom-0 z-10 h-[10%] w-full bg-black" />
      <div className="flex">
        {Array.from(IntroText).map((item, i) => {
          return (
            <AnimatedText
              key={i}
              text={item.text}
              className={cn('text-3xl', item.className)}
              textAnimation={{ ...typingAnim }}
              transition={{
                staggerChildren: delay,
                delayChildren: nextTextDelayTime(delays1, i, 1),
              }}
            />
          );
        })}
      </div>
      <div className="flex">
        {Array.from(IntroDescription).map((item, i) => {
          return (
            <AnimatedText
              key={i}
              text={item.text}
              className={cn('text-1xl', item.className)}
              textAnimation={{ ...smoothTextBlur }}
              splitWord
              transition={{
                staggerChildren: 0.3,
                delayChildren: 3,
              }}
            />
          );
        })}
      </div>
    </m.div>
  );
};

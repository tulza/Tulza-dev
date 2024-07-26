import { m } from 'framer-motion';
import { smoothTextBlur, typingAnim } from '../data/variants/animations';
import { cn, nextTextDelayTime, timeTextDelay } from '@lib/utils';
import { AnimatedText } from './AnimatedText';
import { useLayoutEffect, useRef } from 'react';
import { IntroDescription, IntroText } from '@texts/index';

const textStagger = 0.075;

const delays1 = timeTextDelay(
  Array.from(IntroText).map((item) => item.text),
  textStagger,
  textStagger
);

export const EnterWebsiteAnimation = ({ transitionTime = 4 }) => {
  useLayoutEffect(() => {
    document.getElementById('root')?.classList.add('h-dvh');
    document.getElementById('root')?.classList.add('overflow-hidden');
  });

  const ref = useRef<HTMLDivElement>(null);
  const handleDeleteSelf = () => {
    if (!ref) return;
    enableScroll();
    ref.current?.remove();
  };

  const enableScroll = () => {
    document.getElementById('root')?.classList.remove('h-dvh');
    document.getElementById('root')?.classList.remove('overflow-hidden');
  };

  return (
    <m.div
      ref={ref}
      className="fixed z-[9999] flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gray-800"
      animate={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ delay: transitionTime }}
      onAnimationComplete={handleDeleteSelf}
    >
      <m.div
        className="absolute top-0 z-10 h-[10%] w-full bg-black"
        animate={{ height: 0 }}
        transition={{ delay: transitionTime }}
      />
      <m.div
        className="absolute bottom-0 z-10 h-[10%] w-full bg-black"
        animate={{ height: 0 }}
        transition={{ delay: transitionTime }}
      />
      <div className="flex">
        {Array.from(IntroText).map((item, i) => {
          return (
            <AnimatedText
              key={i}
              text={item.text}
              className={cn('text-3xl', item.className)}
              textAnimation={{ ...typingAnim }}
              transition={{
                staggerChildren: textStagger,
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
                staggerChildren: 0.1,
                delayChildren: 3,
              }}
            />
          );
        })}
      </div>
    </m.div>
  );
};

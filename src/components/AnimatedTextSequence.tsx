import { cn, nextTextDelayTime, timeTextDelay } from '@/lib/utils';
import { smoothTextBlur } from '@data/variants/animations';
import { AnimatedText } from './AnimatedText';

interface AnimatedTextSequenceProps {
  textStagger?: number;
  className?: string;
  textJSON: { text: string; className: string }[];
  delay?: number;
}

const AnimatedTextSequence = ({
  textJSON,
  textStagger = 0.075,
  className,
  delay = 0,
}: AnimatedTextSequenceProps) => {
  const delays = timeTextDelay(
    Array.from(textJSON).map((item) => item.text),
    textStagger,
    textStagger
  );

  return (
    <div className="flex">
      {Array.from(textJSON).map((item, i) => {
        return (
          <AnimatedText
            key={i}
            text={item.text}
            className={cn(className, item.className)}
            textAnimation={{ ...smoothTextBlur }}
            transition={{
              staggerChildren: textStagger,
              delayChildren: nextTextDelayTime(delays, i, 1) + delay,
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedTextSequence;

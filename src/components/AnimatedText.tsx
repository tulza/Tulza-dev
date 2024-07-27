import { AnimationProps, HTMLMotionProps, LayoutProps, motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface AnimatedTextProps extends HTMLMotionProps<'div'> {
  text: string;
  className?: string;
  splitWord?: boolean;
  textAnimation?: AnimationProps | LayoutProps;
}

export const AnimatedText = ({
  text,
  className,
  splitWord,
  textAnimation,
  ...props
}: AnimatedTextProps) => {
  const items: string[] = splitWord
    ? text.split(' ').map((word, i, arr) => word + (i != arr.length - 1 ? ' ' : ''))
    : [...text];

  return (
    <motion.p
      {...props}
      viewport={{ once: true }}
      className={cn('flex *:whitespace-pre', className)}
      initial="hidden"
      whileInView="visible"
    >
      {items.map((letter, i) => (
        <motion.span key={i} {...textAnimation} {...{ text: letter }}>
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

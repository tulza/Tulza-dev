import { cn } from '@lib/utils';
import { HTMLMotionProps, motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

const GradientVariant = {
  hover: {
    background: 'linear-gradient(0deg, hsl(var(--background)), hsl(var(--secondary)))',
    transition: { repeat: Infinity, duration: 1, ease: 'easeInOut' },
  },
  unhover: {
    background: 'linear-gradient(360deg, hsl(var(--background)), hsl(var(--secondary)))',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

interface GradientButtonProps extends HTMLMotionProps<'button'> {
  children?: React.ReactNode;
  childprops?: HTMLAttributes<HTMLDivElement>;
}

const GradientButton = ({ children, childprops, ...props }: GradientButtonProps) => {
  return (
    <>
      <motion.button
        {...props}
        className={cn('rounded-full bg-black p-1 text-white', props.className)}
        animate="unhover"
        whileHover="hover"
      >
        <motion.div
          className="grid place-items-center rounded-full p-1.5"
          variants={GradientVariant}
        >
          <div
            {...childprops}
            className={cn('flex w-full gap-2 rounded-full bg-black p-1.5', childprops?.className)}
          >
            {children}
          </div>
        </motion.div>
      </motion.button>
    </>
  );
};

export default GradientButton;

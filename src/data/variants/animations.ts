import { AnimationProps, Transition, Variant } from 'framer-motion';

type textVariant = {
  hidden: Variant;
  visible: Variant;
};

export const blurIn: textVariant = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: { opacity: 1, filter: 'blur(0px)' },
};

export const smoothEaseInOut: Transition = {
  ease: 'easeInOut',
  duration: 0.5,
};

export const smoothTextBlur: AnimationProps = { variants: blurIn, transition: smoothEaseInOut };

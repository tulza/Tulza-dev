import { AnimationProps, LayoutProps, Transition, Variant } from 'framer-motion';

type textVariant = {
  hidden: Variant;
  visible: Variant;
};

// animations
export const blurIn: textVariant = {
  hidden: { opacity: 0, filter: 'blur(8px)', width: 0 },
  visible: { opacity: 1, filter: 'blur(0px)', width: 'auto' },
};

export const typing: textVariant = {
  hidden: { display: 'none' },
  visible: { display: 'block' },
};

export const fadeIn: textVariant = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: 'auto' },
};

// Transitions
export const smoothEaseInOut: Transition = {
  ease: 'easeInOut',
  duration: 0.5,
};

// full animation
export const smoothTextBlur: AnimationProps | LayoutProps = {
  variants: blurIn,
  transition: { ...smoothEaseInOut },
};

export const typingAnim: AnimationProps | LayoutProps = {
  variants: typing,
};

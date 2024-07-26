import { AnimationProps, LayoutProps, Transition, Variant } from 'framer-motion';

type textVariant = {
  hidden: Variant;
  visible: Variant;
};

export const mergeAnimation = (animations: textVariant[]) => {
  const mergeHidden = animations.map((anim) => anim.hidden);
  const mergeVisible = animations.map((anim) => anim.visible);
  return {
    hidden: Object.assign({}, ...mergeHidden),
    visible: Object.assign({}, ...mergeVisible),
  };
};
// animations
const blurIn: textVariant = {
  hidden: { filter: 'blur(8px)' },
  visible: { filter: 'blur(0px)' },
};

const widen: textVariant = {
  hidden: { width: 0 },
  visible: { width: 'auto' },
};

export const pop: textVariant = {
  hidden: { display: 'none' },
  visible: { display: 'block' },
};

export const fadeIn: textVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Transitions
export const smoothEaseInOut: Transition = {
  ease: 'easeInOut',
  duration: 0.5,
};

// full animation
export const smoothTextBlur: AnimationProps | LayoutProps = {
  variants: mergeAnimation([blurIn, fadeIn]),
  transition: smoothEaseInOut,
};

export const typingAnim: AnimationProps | LayoutProps = {
  variants: pop,
};

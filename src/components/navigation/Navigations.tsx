import { HTMLMotionProps, motion } from 'framer-motion';
import React, { memo, useRef } from 'react';

export const Navigator = () => {
  return (
    <div className="flex gap-2">
      <NavButton label="About me" />
      <NavButton label="Projects" />
      <NavButton label="Contact" />
      <motion.div className="absolute size-2 bg-black" initial={{ opacity: 0 }} />
    </div>
  );
};

interface NavButtonProps extends HTMLMotionProps<'button'> {
  label: string;
  link?: string;
}
const NavButton = memo(({ label, ...props }: NavButtonProps) => {
  return (
    <div className="relative flex w-min flex-col items-center gap-2">
      <motion.button
        {...props}
        className="relative grid place-items-center overflow-hidden whitespace-nowrap rounded-full p-4 px-8"
        whileHover="hover"
      >
        <div className="absolute bottom-0 left-0 -z-10 h-full w-full origin-bottom bg-black/20" />
        <motion.div
          className="absolute -z-10 h-full w-full origin-center bg-black/30"
          initial={{ scaleY: 0 }}
          variants={{ hover: { scaleY: 1 } }}
          transition={{ duration: 0.25 }}
        />
        {label}
      </motion.button>
    </div>
  );
});

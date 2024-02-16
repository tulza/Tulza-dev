import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

type InViewWrapperProps = {
  className?: string;
  children: React.ReactNode;
  amount?: number;
  duration?: number;
  delay?: number;
  inViewVariant?: any | null;
};

const InViewWrapper = ({
  amount,
  children,
  duration,
  delay,
  className,
  inViewVariant,
}: InViewWrapperProps) => {
  amount = amount ? amount : 0.5;
  duration = duration ? duration : 0.5;
  delay = delay ? delay : 0;

  inViewVariant = inViewVariant
    ? inViewVariant
    : { Visible: { opacity: 1 }, Invisible: { opacity: 0 } };

  const ref = useRef(null);
  const IsInView = useInView(ref, { amount: amount });
  return (
    <motion.div
      className={clsx("", className)}
      ref={ref}
      initial="Invisible"
      animate={IsInView ? "Visible" : "Invisible"}
      transition={
        IsInView
          ? { duration: duration, delay: delay }
          : { duration: 0, delay: 0 }
      }
      variants={inViewVariant}
    >
      {children}
    </motion.div>
  );
};

export default InViewWrapper;

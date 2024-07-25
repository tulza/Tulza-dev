import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  OnClick?: (event: any) => void;
  className?: string;
};

const ButtonWrapper = ({ children, className, OnClick }: ButtonProps) => {
  return (
    <motion.div
      className={clsx("cursor-pointer", `${className}`)}
      whileHover="hovered"
      onClick={OnClick}
    >
      {children}
    </motion.div>
  );
};

export default ButtonWrapper;

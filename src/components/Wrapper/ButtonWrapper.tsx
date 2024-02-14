import { motion } from "framer-motion";
import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  OnClick?: (event: any) => void;
  ref?: React.RefObject<HTMLInputElement>;
};

const ButtonWrapper = ({ children, OnClick }: ButtonProps) => {
  return (
    <motion.div
      className="cursor-pointer"
      whileHover="hovered"
      onClick={OnClick}
    >
      {children}
    </motion.div>
  );
};

export default ButtonWrapper;

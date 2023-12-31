import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

/**
 * <function description>
 * @param {string} text text
 * @param {string} color  uses root color
 * @param {array} offset [x, y] translate offset
 * @return {div} returns a div text box with highlighted background
 */
const HighlightedText = ({ text, color, offset, className }) => {
  offset = offset ? offset : [5, 2];
  color = color ? color : "white";
  className = className ? className : "text-2xl";
  const [x, y] = offset;
  return (
    <motion.div className={clsx(`${className} relative h-min w-max`)}>
      <div
        className={clsx(
          "absolute -z-10 h-2/3 w-[90%] opacity-20",
          `bg-${color}`,
        )}
        style={{ right: -offset[0], bottom: -offset[1] }}
      />
      {text}
    </motion.div>
  );
};

export default HighlightedText;

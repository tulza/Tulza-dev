import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

type AnimatedTextProps = {
  className?: string;
  type?: "word" | "letters";
  staggerChildren?: number;
  TextVariants: any;
  transition?: any;
  text: string;
  delayChild?: number;
};

const AnimatedText = ({
  className,
  text,
  TextVariants,
  type = "word",
  staggerChildren = type == "word" ? 0.175 : 0.04,
  transition,
  delayChild = 0,
}: AnimatedTextProps) => {
  let items: string | string[] = text;
  if (type == "word") {
    items = items.split(" ");
  } else {
    items = [...items];
  }
  const ref = useRef(null);
  const InView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className={clsx("flex", `${className}`)}
      transition={{
        staggerChildren: staggerChildren,
        delayChildren: delayChild,
      }}
      initial="initial"
      animate={InView ? "animate" : "initial"}
    >
      {items.map((char, index) => {
        if (char == " ")
          return (
            <motion.span
              variants={TextVariants}
              transition={transition}
              key={uuidv4()}
            >
              &nbsp;
            </motion.span>
          );
        return (
          <motion.span
            className="whitespace-nowrap"
            variants={TextVariants}
            transition={transition}
            key={uuidv4()}
          >
            {char}
            {type == "word" && !!(index != items.length - 1) && <>&nbsp;</>}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default AnimatedText;

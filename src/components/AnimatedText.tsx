import clsx from "clsx";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

type AnimatedTextProps = {
  className?: string;
  type?: "word" | "letters";
  staggerChildren?: number;
  TextVariants: any;
  transition?: any;
  text: string;
};

const AnimatedText = ({
  className,
  text,
  TextVariants,
  type = "word",
  staggerChildren = type == "word" ? 0.175 : 0.04,
  transition,
}: AnimatedTextProps) => {
  let items: string | string[] = text;
  if (type == "word") {
    items = items.split(" ");
  } else {
    items = [...items];
  }
  return (
    <motion.div
      className={clsx("flex", `${className}`)}
      transition={{ staggerChildren: staggerChildren }}
      initial="initial"
      animate="animate"
    >
      {items.map((char, index) => {
        if (char == " ")
          return (
            <motion.div
              variants={TextVariants}
              transition={transition}
              key={uuidv4()}
            >
              &nbsp;
            </motion.div>
          );
        return (
          <motion.div
            variants={TextVariants}
            transition={transition}
            key={uuidv4()}
          >
            {char}
            {type == "word" && !!(index != items.length - 1) && <>&nbsp;</>}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default AnimatedText;

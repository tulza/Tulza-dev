import clsx from "clsx";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  className?: string;
  type?: "word" | "letters";
  staggerChildren?: number;
  TextVariants: any;
  text: string;
};

const AnimatedText = ({
  className,
  TextVariants,
  text,
  type = "word",
  staggerChildren = type == "word" ? 0.175 : 0.04,
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
          return <motion.div variants={TextVariants}>&nbsp;</motion.div>;
        return (
          <motion.div variants={TextVariants}>
            {char}
            {type == "word" && !!(index != items.length - 1) && <>&nbsp;</>}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default AnimatedText;

import clsx from "clsx";
import { motion } from "framer-motion";

/**
 * @param strokeColor mod webkit stroke color, default white
 */

const CodeText = ({
  text,
  color = "#fff",
  className,
}: {
  text?: string;
  color?: string;
  className?: string;
}) => {
  return (
    <motion.span
      className={clsx(
        "textStroke cursor-pointer select-none whitespace-nowrap text-3xl font-bold text-transparent",
        `${className}`,
      )}
      whileHover={color && { color: color }}
      style={{ WebkitTextStrokeColor: color }}
    >
      {/* <{text}/>  */}
      &lt;{text}/&zwnj;&gt;
    </motion.span>
  );
};

export default CodeText;

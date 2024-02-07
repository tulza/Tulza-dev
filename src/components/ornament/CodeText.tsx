import { motion } from "framer-motion";

/**
 * @param strokeColor mod webkit stroke color, default white
 */

const CodeText = ({
  text,
  strokeColor = "white",
}: {
  text?: string;
  strokeColor?: string;
}) => {
  return (
    <motion.span
      className="textStroke cursor-pointer select-none whitespace-nowrap text-3xl font-bold text-transparent"
      whileHover={{ color: "#fff" }}
      style={{ WebkitTextStrokeColor: strokeColor }}
    >
      {/* <{text}/>  */}
      &lt;{text}/&zwnj;&gt;
    </motion.span>
  );
};

export default CodeText;

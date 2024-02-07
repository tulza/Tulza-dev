import clsx from "clsx";
import { motion } from "framer-motion";

type TextProps = {
  text: string;
  highlight?: string;
  className?: string;
  opacity?: number;
};

const HighlightedText = ({
  text,
  highlight = "white",
  opacity = 0.3,
  className,
}: TextProps) => {
  return (
    <div className={clsx("relative z-10", `${className}`)}>
      <motion.div
        className={"absolute bottom-0 -z-10 h-2/3 w-full translate-x-[10%]"}
        variants={{ hovered: { height: "33%" } }}
        style={{ backgroundColor: highlight, opacity: opacity }}
      />
      {text}
    </div>
  );
};

export default HighlightedText;

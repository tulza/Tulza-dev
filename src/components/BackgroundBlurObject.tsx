import clsx from "clsx";
import { motion } from "framer-motion";

const BackgroundBlurObject = ({ className }: { className: string }) => {
  return (
    <div
      className={clsx(
        "absolute aspect-[2.5] w-[50%] rotate-[25deg] rounded-full bg-[#0f0f0f] blur-[150px]",
        `${className}`,
      )}
    />
  );
};

export default BackgroundBlurObject;

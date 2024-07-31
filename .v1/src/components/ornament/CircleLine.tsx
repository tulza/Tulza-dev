import clsx from "clsx";
import { motion } from "framer-motion";

const CircleLine = () => {
  const Circle = ({ stroke, fill }: { stroke: string; fill: string }) => {
    return (
      <motion.div
        className={clsx(
          "border-1 aspect-square w-4 rounded-full border bg-transparent",
          stroke,
        )}
        whileHover={{ backgroundColor: fill }}
        transition={{ duration: 0.05, restDelta: 1, restSpeed: 1 }}
      />
    );
  };

  return (
    <div className="absolute right-8 top-4 flex w-0 flex-col gap-2">
      {/* uses tailwind config color */}
      <Circle stroke="border-white" fill="#ffffff" />
      <Circle stroke="border-red" fill="#c95454" />
      <Circle stroke="border-yellow" fill="#c9af54" />
      <Circle stroke="border-green" fill="#79c954" />
      <Circle stroke="border-blue" fill="#54a6c9" />
      <Circle stroke="border-purple" fill="#9554c9" />
    </div>
  );
};

export default CircleLine;

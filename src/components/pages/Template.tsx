import { useState } from "react";
import { motion } from "framer-motion";
import InputRange from "@components/InputRange";

const Template = () => {
  const [r, setRotate] = useState<number>(0);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const rangeRotate = { min: 0, max: 360 };
  const range = { min: -720, max: 720 };

  const handleReset = () => {
    setRotate(0);
    setX(0);
    setY(0);
  };
  return (
    <div className="grid h-full w-full items-center justify-center">
      <div className="flex flex-col gap-8">
        <Entity x={x} y={y} rotate={r} content="hi" />
        <div>
          <InputRange value={String(r)} set={setRotate} range={rangeRotate} />
          <InputRange value={String(x)} range={range} set={setX} />
          <InputRange value={String(y)} range={range} set={setY} />
        </div>
        <button
          className="inline-block rounded bg-black px-4 py-2 font-bold"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

type entityProps = {
  x?: number;
  y?: number;
  rotate?: number;
  content?: string;
};
const Entity = ({ x, y, rotate, content }: entityProps) => {
  return (
    <motion.div
      drag
      dragConstraints={{ right: 720, left: -720, top: -720, bottom: 720 }}
      animate={{
        rotate: rotate,
        x,
        y,
      }}
      className="flex aspect-square w-[200px] items-center justify-center rounded-full p-8 text-white outline-dashed outline-white"
    >
      <p className="text-5xl">{content}</p>
    </motion.div>
  );
};

export default Template;

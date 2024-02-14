import clsx from "clsx";
import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SliderIntroText = ({
  className,
  items,
}: {
  className?: string;
  items: string[];
}) => {
  const [itemIndex, setIndex] = useState([0, 1]);
  const length = items.length;
  useEffect(() => {
    console.log(itemIndex);
    setTimeout(() => {
      setIndex([(itemIndex[0] + 1) % length, (itemIndex[1] + 1) % length]);
    }, 2000);
  }, [itemIndex]);

  return (
    <motion.div className={clsx("relative w-min", `${className}`)}>
      <motion.div
        key={items[itemIndex[0]]}
        className="w-full whitespace-nowrap"
        initial={{ y: 0 }}
        animate={{ y: "-50%", opacity: 0 }}
      >
        {items[itemIndex[0]]}
      </motion.div>
      <motion.p
        key={items[itemIndex[1]]}
        className="w-full whitespace-nowrap"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: "-100%", opacity: 1 }}
      >
        {items[itemIndex[1]]}
      </motion.p>
    </motion.div>
  );
};

export default SliderIntroText;

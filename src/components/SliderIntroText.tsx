import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type SliderIntroProp = {
  className?: string;
  itemClassName?: string;
  items: string[];
  icons?: string[];
};
const SliderIntroText = ({
  className,
  itemClassName,
  items,
  icons,
}: SliderIntroProp) => {
  const [itemIndex, setIndex] = useState([0, 1]);
  const length = items.length;
  useEffect(() => {
    // console.log(itemIndex);
    setTimeout(() => {
      setIndex([(itemIndex[0] + 1) % length, (itemIndex[1] + 1) % length]);
    }, 2000);
  }, [itemIndex]);

  useEffect(() => {
    if (items.length != icons?.length) {
      console.error("items and icons must have the same length");
      icons = undefined;
    }
  }, []);
  return (
    <motion.div className={clsx("relative h-min", `${className}`)}>
      <motion.div
        key={items[itemIndex[0]]}
        className={clsx("flex w-full whitespace-nowrap", `${itemClassName}`)}
        initial={{ y: 0 }}
        animate={{ y: "-50%", opacity: 0 }}
      >
        {items[itemIndex[0]]}&nbsp;
        {!!icons && <img className="h-[40px]" src={icons[itemIndex[0]]} />}
      </motion.div>
      <motion.p
        key={items[itemIndex[1]]}
        className={clsx("flex w-full whitespace-nowrap", `${itemClassName}`)}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: "-100%", opacity: 1 }}
      >
        {items[itemIndex[1]]}&nbsp;
        {!!icons && <img className="h-[40px]" src={icons[itemIndex[1]]} />}
      </motion.p>
    </motion.div>
  );
};

export default SliderIntroText;

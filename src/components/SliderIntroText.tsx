import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type SliderIntroProp = {
  className?: string;
  itemClassName?: string;
  items: string[];
  hasIcon?: boolean;
  icons?: string[];
};
const SliderIntroText = ({
  className,
  itemClassName,
  items,
  hasIcon = false,
  icons = [],
}: SliderIntroProp) => {
  const [itemIndex, setIndex] = useState([0, 1]);
  const length = items.length;
  useEffect(() => {
    // console.log(itemIndex);
    setTimeout(() => {
      setIndex([(itemIndex[0] + 1) % length, (itemIndex[1] + 1) % length]);
    }, 2000);
  }, [itemIndex]);

  return (
    <motion.div className={clsx("relative h-min", `${className}`)}>
      <motion.div
        key={items[itemIndex[0]]}
        className={clsx("flex w-full whitespace-nowrap", `${itemClassName}`)}
        initial={{ y: 0 }}
        animate={{ y: "-50%", opacity: 0 }}
      >
        {items[itemIndex[0]]}&nbsp;
        {hasIcon && <img className="h-[40px]" src={icons[itemIndex[0]]} />}
      </motion.div>
      <motion.p
        key={items[itemIndex[1]]}
        className={clsx("flex w-full whitespace-nowrap", `${itemClassName}`)}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: "-100%", opacity: 1 }}
      >
        {items[itemIndex[1]]}&nbsp;
        {hasIcon && <img className="h-[40px]" src={icons[itemIndex[1]]} />}
      </motion.p>
    </motion.div>
  );
};

export default SliderIntroText;

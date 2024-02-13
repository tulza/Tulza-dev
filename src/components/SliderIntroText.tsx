import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SliderIntroText = () => {
  const [item, setItems] = useState(["item1", "item2"]);
  useEffect(() => {
    setTimeout(() => {
      setItems([item[1], item[0]]);
    }, 1000);
  }, [item]);

  return (
    <motion.div className="relative ">
      <motion.div
        key={item[1]}
        initial={{ y: 0 }}
        animate={{ y: "-50%", opacity: 0 }}
      >
        {item[0]}
      </motion.div>
      <motion.p
        key={item[0]}
        className="absolute"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: "-100%", opacity: 1 }}
      >
        {item[1]}
      </motion.p>
    </motion.div>
  );
};

export default SliderIntroText;

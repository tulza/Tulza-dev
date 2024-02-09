import CodeText from "@ornament/CodeText";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const MobileNavigation = () => {
  const [isToggled, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggled);
  };
  return (
    <div className="bold hover relative flex h-[5rem] w-full select-none items-center justify-between bg-black px-[5rem] tracking-wider">
      <CodeText text="A" />
      <MenuButton handleToggle={handleToggle} isToggled={isToggled} />
    </div>
  );
};
const MenuButton = ({
  isToggled,
  handleToggle,
}: {
  isToggled: boolean;
  handleToggle: () => void;
}) => {
  const Block = () => <div className="aspect-square w-1 bg-white" />;
  const ToggleBlock = () => (
    <motion.div
      className="aspect-square w-1 bg-white"
      initial={isToggled ? { scale: 1 } : { scale: 0 }}
      animate={isToggled ? { scale: 0 } : { scale: 1 }}
    />
  );
  return (
    <motion.div
      className="grid aspect-square w-6 cursor-pointer grid-cols-3"
      onClick={handleToggle}
    >
      <Block />
      <ToggleBlock />
      <Block />
      <ToggleBlock />
      <Block />
      <ToggleBlock />
      <Block />
      <ToggleBlock />
      <Block />
    </motion.div>
  );
};

export default MobileNavigation;

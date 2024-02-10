import CodeText from "@ornament/CodeText";
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";
import MobNavMenu from "./MobNavMenu";

const MobileNavigation = () => {
  const [isMenuToggled, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!isMenuToggled);
  };
  return (
    <>
      <MobNavMenu isToggled={isMenuToggled} />
      <div className="bold hover relative flex h-[5rem] w-full select-none items-center justify-between bg-black px-[2rem] tracking-wider">
        <CodeText text="a" />
        <MenuButton
          handleToggle={handleToggle}
          isToggled={isMenuToggled}
          className="z-50"
        />
      </div>
    </>
  );
};
const MenuButton = React.memo(
  ({
    className,
    isToggled,
    handleToggle,
  }: {
    className?: string;
    isToggled: boolean;
    handleToggle: () => void;
  }) => {
    const Block = () => (
      <motion.div
        className="aspect-square w-full bg-white"
        initial={isToggled ? { rotate: 0 } : { rotate: 45 }}
        animate={isToggled ? { rotate: 45 } : { rotate: 0 }}
      />
    );
    const ToggleBlock = () => (
      <motion.div
        className="aspect-square w-full bg-white"
        initial={isToggled ? { scale: 1 } : { scale: 0 }}
        animate={isToggled ? { scale: 0 } : { scale: 1 }}
      />
    );
    return (
      <motion.div
        className={clsx(
          "origin grid aspect-square w-10 cursor-pointer grid-cols-3 place-items-center gap-2",
          `${className}`,
        )}
        onClick={handleToggle}
        animate={isToggled ? { rotateZ: 90, gap: "4px" } : { rotateZ: 0 }}
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
  },
);

export default MobileNavigation;

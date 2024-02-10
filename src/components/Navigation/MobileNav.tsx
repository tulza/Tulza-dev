import CodeText from "@ornament/CodeText";
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";
import MobNavMenu from "./MobNavMenu";
import { blob } from "@/assets/indexImage";

const MobileNavigation = () => {
  const [isMenuToggled, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!isMenuToggled);
  };
  return (
    <>
      <MobNavMenu isToggled={isMenuToggled} />
      <Blobs />
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

const Blobs = () => {
  const bloboffsets = [0, 90, 180];
  const durations = [7, 17, 31];
  return (
    <>
      <motion.img
        src={blob}
        className="absolute left-0 z-10 w-[25rem]"
        initial={{ x: "-30%", y: "-60%", rotate: bloboffsets[0] }}
        animate={{ rotate: 360 + bloboffsets[0] }}
        transition={{
          duration: durations[0],
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <motion.img
        src={blob}
        className="absolute left-0 z-10 w-[25rem]"
        initial={{ x: "-30%", y: "-60%", rotate: bloboffsets[1] }}
        animate={{ rotate: 360 + bloboffsets[1] }}
        transition={{
          duration: durations[1],
          ease: "linear",
          repeat: Infinity,
        }}
      />{" "}
      <motion.img
        src={blob}
        className="absolute left-0 z-10 w-[25rem]"
        initial={{ x: "-30%", y: "-60%", rotate: bloboffsets[2] }}
        animate={{ rotate: 360 + bloboffsets[2] }}
        transition={{
          duration: durations[2],
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </>
  );
};

export default MobileNavigation;

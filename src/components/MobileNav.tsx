import CodeText from "@ornament/CodeText";
import ButtonWrapper from "./ButtonWrapper";
import { motion } from "framer-motion";
import React, { useState } from "react";

const MobileNavigation = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <div className="bold hover relative flex h-[5rem] w-full select-none items-center justify-between bg-black px-[5rem] tracking-wider">
      <CodeText text="A" />
      <MenuButton isToggled={isToggled} setToggle={setToggle} />
    </div>
  );
};
const MenuButton = ({
  isToggled,
  setToggle,
}: {
  isToggled: boolean;
  setToggle: any;
}) => {
  const ToggleBlock = React.memo(() => (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        className="aspect-square w-1 bg-white"
        animate={
          isToggled
            ? { rotateZ: "45deg", width: "0" }
            : { rotateZ: "0deg", width: "full" }
        }
      />
    </div>
  ));
  const NormBlock = () => <div className="h-1 w-1 bg-white" />;

  return (
    <ButtonWrapper
      OnClick={() => {
        setToggle(!isToggled);
      }}
    >
      <motion.div className="m-4 grid grid-cols-3 items-center justify-center gap-1">
        <NormBlock />
        <ToggleBlock />
        <NormBlock />
        <ToggleBlock />
        <NormBlock />
        <ToggleBlock />
        <NormBlock />
        <ToggleBlock />
        <NormBlock />
      </motion.div>
    </ButtonWrapper>
  );
};

export default MobileNavigation;

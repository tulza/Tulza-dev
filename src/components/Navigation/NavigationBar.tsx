import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HighlightedText from "@components/HighlightedText";
import CodeText from "@ornament/CodeText";
import ButtonWrapper from "../Wrapper/ButtonWrapper";

const NavigationBar = () => {
  const initButtonRef = useRef(null);

  const [hoveredButtonPos, setButtonPos] = useState({ left: 0, width: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const left = initButtonRef.current.offsetLeft;
    const width = initButtonRef.current.offsetWidth;
    setButtonPos({ left: left, width: width / 2 });
  }, []);

  const ButtonHovered = (e) => {
    setIsHovering(true);
    const left = e.target.offsetLeft;
    const width = e.target.offsetWidth;
    setButtonPos({ left: left, width: width / 2 });
  };
  const ButtonUnhovered = () => {
    setIsHovering(false);
  };

  return (
    <div className="bold hover relative flex h-[5rem] w-[50rem] select-none items-center justify-between border-b bg-black px-[5rem] tracking-wider">
      <CodeText text="a" />
      <div
        ref={initButtonRef}
        onMouseEnter={ButtonHovered}
        onMouseLeave={ButtonUnhovered}
      >
        <ButtonWrapper>
          <HighlightedText text="About me" highlight="var(--blue)" />
        </ButtonWrapper>
      </div>
      <div onMouseEnter={ButtonHovered} onMouseLeave={ButtonUnhovered}>
        <ButtonWrapper>
          <HighlightedText text="Projects" highlight="var(--green)" />
        </ButtonWrapper>
      </div>
      <div onMouseEnter={ButtonHovered} onMouseLeave={ButtonUnhovered}>
        <ButtonWrapper>
          <HighlightedText text="Contacts" highlight="var(--yellow)" />
        </ButtonWrapper>
      </div>
      <div onMouseEnter={ButtonHovered} onMouseLeave={ButtonUnhovered}>
        <ButtonWrapper>
          <HighlightedText text="Resume" highlight="var(--purple)" />
        </ButtonWrapper>
      </div>
      <motion.div
        className="absolute bottom-3 h-2 w-2 rounded-full bg-white"
        animate={{
          left: hoveredButtonPos.left + hoveredButtonPos.width,
          opacity: isHovering ? 1 : 0,
        }}
        transition={isHovering ? {} : { delay: 0.3 }}
        initial={{ opacity: 0 }}
      />
    </div>
  );
};

export default NavigationBar;

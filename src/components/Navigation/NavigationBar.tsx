import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HighlightedText from "@components/HighlightedText";
import CodeText from "@ornament/CodeText";
import ButtonWrapper from "../Wrapper/ButtonWrapper";
import { blob } from "@/assets/indexImage";
import clsx from "clsx";

const NavigationBar = () => {
  const initButtonRef = useRef<HTMLDivElement | null>(null);

  const [hoveredButtonPos, setButtonPos] = useState({ left: 0, width: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (initButtonRef.current) {
      const left = initButtonRef.current.offsetLeft;
      const width = initButtonRef.current.offsetWidth;
      setButtonPos({ left: left, width: width / 2 });
    }
  }, []);

  const ButtonHovered = (e: any) => {
    setIsHovering(true);
    const left = e.target.offsetLeft;
    const width = e.target.offsetWidth;
    setButtonPos({ left: left, width: width / 2 });
  };
  const ButtonUnhovered = () => {
    setIsHovering(false);
  };

  return (
    <>
      <Blobs />
      <div className="relative flex h-[5rem] w-[50rem] select-none items-center justify-between border-b px-[5rem] tracking-wider backdrop-blur-md">
        <CodeText text="a" className="bold" />
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
    </>
  );
};

const Blobs = () => {
  const bloboffsets = [0, 90, 180];
  const durations = [7, 17, 31];
  return (
    <>
      <motion.img
        src={blob}
        className={clsx(
          `pointer-events-none absolute left-[50%] right-0 w-[30rem] blur-sm`,
        )}
        initial={{ x: "-30%", y: "-75%", rotate: bloboffsets[0] }}
        animate={{ rotate: 360 + bloboffsets[0] }}
        transition={{
          duration: durations[0],
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <motion.img
        src={blob}
        className={clsx(
          `pointer-events-none absolute left-[50%] right-0 w-[32rem] blur-[2px]`,
        )}
        initial={{ x: "-60%", y: "-75%", rotate: bloboffsets[1] }}
        animate={{ rotate: 360 + bloboffsets[1] }}
        transition={{
          duration: durations[1],
          ease: "linear",
          repeat: Infinity,
        }}
      />{" "}
      <motion.img
        src={blob}
        className={clsx(
          `pointer-events-none absolute left-[50%] right-0 w-[35rem]`,
        )}
        initial={{ x: "-50%", y: "-75%", rotate: bloboffsets[2] }}
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

export default NavigationBar;

import { ThemeContext } from "@/App";
import { AboutMenuFocus } from "@/Framer/Variants";
import { DownArrow, DownArrowLM, UpArrow, UpArrowLM } from "@svg/index";
import ButtonWrapper from "@components/Wrapper/ButtonWrapper";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";

// i'm sorry
const AboutMenu = ({
  parentRef,
  itemsRef,
  itemsTitle,
  focus,
  setFocus,
}: {
  parentRef: any;
  itemsRef: any[];
  itemsTitle: string[];
  focus: any;
  setFocus: any;
}) => {
  const { theme } = useContext(ThemeContext);
  const [isMaxStick, setIsMaxStick] = useState(false);
  const { scrollY } = useScroll();
  const ScrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(ScrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  // makes motion value smaller
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    isMaxStick ? [0, 0] : [0, -20],
    {
      clamp: false,
    },
  );
  const menuRef = useRef(null);
  useEffect(() => {
    const IsTopOrBottom = () => {
      if (menuRef.current && parentRef.current) {
        const { offsetTop, offsetHeight } = menuRef.current;
        const { offsetHeight: parentOffsetHeight } = parentRef.current;
        if (
          offsetTop == 0 ||
          parentOffsetHeight - offsetHeight - offsetTop == 0
        ) {
          setIsMaxStick(true);
        } else {
          setIsMaxStick(false);
        }
      }
      return;
    };
    const handleCurrentFocus = () => {
      if (menuRef.current) {
        const { offsetTop, offsetHeight } = menuRef.current;
        const focusPoint = offsetTop + offsetHeight / 2;
        for (let i = itemsRef.length - 1; 0 <= i; i--) {
          if (itemsRef[i].current.offsetTop < focusPoint) {
            setFocus(i);
            return;
          }
        }
      }
    };
    addEventListener("scroll", () => {
      IsTopOrBottom();
      handleCurrentFocus();
    });
    return () => {
      removeEventListener("scroll", () => {
        IsTopOrBottom();
        handleCurrentFocus();
      });
    };
  });

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;

    const offset =
      parentRef.current.offsetTop +
      ref.current.offsetHeight / 2 +
      ref.current.offsetTop -
      window.innerHeight / 2;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };
  const scrollToFocus = (i: number) => {
    if (i < 0 || i >= itemsRef.length) return;
    if (!itemsRef[i].current) return;
    const offset =
      parentRef.current.offsetTop +
      itemsRef[i].current.offsetHeight / 1.5 +
      itemsRef[i].current.offsetTop -
      window.innerHeight / 2;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <motion.div
      className="sticky left-0 top-[calc(50%_-_200px)] h-min"
      style={{ y: velocityFactor }}
      ref={menuRef}
    >
      <div className=" w-[200px] space-y-4 rounded-xl bg-aboutContainer p-4 px-2 outline outline-1  outline-[#585858] lg:w-[300px] lg:px-2">
        {itemsRef.map((elemRef, i) => {
          return (
            <motion.div
              animate={focus == i ? "focus" : "unfocused"}
              variants={AboutMenuFocus}
              className="flex h-10 w-full items-center rounded-lg pl-2 outline outline-1 outline-[#585858]"
              key={i}
            >
              <ButtonWrapper OnClick={() => scrollToRef(elemRef)}>
                {i + 1}{" "}
                <span className="bold text-sm lg:text-base">
                  {itemsTitle[i]}
                </span>
              </ButtonWrapper>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-evenly">
        <ButtonWrapper
          className="rounded-full"
          OnClick={() => scrollToFocus(focus - 1)}
        >
          <div className="relative flex h-[40px] w-[80px] items-center justify-center overflow-hidden rounded-full bg-aboutContainer outline outline-1 outline-[#585858]">
            <img
              src={theme == "light" ? UpArrowLM : UpArrow}
              className="z-10 w-6"
            />
            <motion.div
              className="absolute aspect-square w-0 rounded-full bg-[#2c2c2c]"
              variants={{ hovered: { width: "100%" } }}
            />
          </div>
        </ButtonWrapper>
        <ButtonWrapper
          className="rounded-full"
          OnClick={() => scrollToFocus(focus + 1)}
        >
          <div className="relative flex h-[40px] w-[80px] items-center justify-center overflow-hidden rounded-full bg-aboutContainer outline outline-1 outline-[#585858]">
            <img
              src={theme == "light" ? DownArrowLM : DownArrow}
              className="z-10 w-6"
            />
            <motion.div
              className="absolute aspect-square w-0 rounded-full bg-[#2c2c2c]"
              variants={{ hovered: { width: "100%" } }}
            />
          </div>
        </ButtonWrapper>
      </div>
    </motion.div>
  );
};
export default AboutMenu;

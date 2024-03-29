import HighlightedText from "@components/HighlightedText";
import ButtonWrapper from "@components/Wrapper/ButtonWrapper";
import { SectionRefContext } from "@pages/MainPage";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext } from "react";

type Props = {
  className?: string;
  isToggled: boolean;
  NavigateSection: any;
};
const MobNavMenu = ({ className, isToggled, NavigateSection }: Props) => {
  const { AboutRef, ProjectRef, ContactRef } = useContext(SectionRefContext);

  return (
    <motion.div
      className={clsx(
        "bg-navMenuBg absolute right-0 top-0 z-[999] h-full w-0 overflow-hidden outline backdrop-blur-xl",
        `${className}`,
      )}
      initial={{ opacity: 0, width: 0 }}
      animate={isToggled ? { opacity: 1, width: "100%" } : { opacity: 0 }}
    >
      <motion.div
        transition={{
          staggerChildren: isToggled ? 0.1 : 0,
          delayChildren: 0.3,
        }}
        initial={false}
        animate={isToggled ? "open" : "closed"}
      >
        <div className="bold mr-20 mt-[8rem] flex flex-col items-end justify-center gap-6 text-nowrap text-3xl">
          <MenuItems
            text="About me"
            highlight="var(--blue)"
            OnClick={() => {
              NavigateSection(AboutRef);
            }}
          />
          <MenuItems
            text="Projects"
            highlight="var(--green)"
            OnClick={() => {
              NavigateSection(ProjectRef);
            }}
          />
          <MenuItems
            text="Contacts"
            highlight="var(--yellow)"
            OnClick={() => {
              NavigateSection(ContactRef);
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const ItemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 10 },
};

type TextProps = {
  text: string;
  highlight?: string;
  className?: string;
  OnClick?: () => void;
};

const MenuItems = ({ text, highlight = "white", OnClick }: TextProps) => {
  return (
    <>
      <motion.div variants={ItemVariants} className="text-text relative w-max">
        <ButtonWrapper OnClick={OnClick}>
          <HighlightedText text={text} highlight={highlight} />
        </ButtonWrapper>
        <hr className="border-line absolute mb-4 mt-1 w-[120%] -translate-x-10" />
      </motion.div>
    </>
  );
};

export default MobNavMenu;

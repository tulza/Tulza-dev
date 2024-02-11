import { IntroTextVariant } from "@/Framer/Variants";
import AnimatedText from "./AnimatedText";

const IntroText = () => {
  return (
    <div className="relative flex">
      <AnimatedText
        transition={{ duration: 0.5, type: "spring" }}
        staggerChildren={0.1}
        className="textStroke bold overflow-hidden text-[4rem] sm:text-[6rem]"
        text="Hello I'm Ashton"
        TextVariants={IntroTextVariant}
        type="letters"
      />
      <AnimatedText
        transition={{ duration: 0.5, type: "spring" }}
        staggerChildren={0.1}
        className="bold absolute right-0 -translate-y-1 overflow-hidden text-[4rem] sm:text-[6rem]"
        text="Ashton"
        TextVariants={IntroTextVariant}
        type="letters"
        delayChild={1.1}
      />
    </div>
  );
};

export default IntroText;

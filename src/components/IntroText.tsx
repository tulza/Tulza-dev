import { IntroTextVariant } from "@/Framer/Variants";
import AnimatedText from "./AnimatedText";

const IntroText = () => {
  return (
    <div className="relative flex">
      <AnimatedText
        transition={{ duration: 0.5, type: "spring" }}
        staggerChildren={0.05}
        className="textStroke bold overflow-hidden text-[4rem] sm:text-[6rem]"
        text="Hello, I'm Ashton"
        TextVariants={IntroTextVariant}
        type="letters"
      />
      <AnimatedText
        transition={{ duration: 0.5, type: "spring" }}
        staggerChildren={0.05}
        className="bold absolute right-0 -translate-y-1 overflow-hidden text-[4rem] sm:text-[6rem]"
        text="Ashton"
        TextVariants={IntroTextVariant}
        type="letters"
        delayChild={0.55}
      />
    </div>
  );
};

export default IntroText;

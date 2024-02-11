import { IntroTextVariant } from "@/Framer/Variants";
import AnimatedText from "./AnimatedText";

const MoblieIntroText = () => {
  return (
    <div className="ml-10 text-[6.5rem] leading-[7.5rem]">
      <AnimatedText
        transition={{ duration: 0.5, type: "spring" }}
        staggerChildren={0.1}
        className="textStroke bold overflow-hidden"
        text="Hello,"
        TextVariants={IntroTextVariant}
        type="letters"
      />
      <AnimatedText
        transition={{ duration: 0.5, type: "spring" }}
        staggerChildren={0.1}
        className="textStroke bold overflow-hidden"
        text="I'm"
        TextVariants={IntroTextVariant}
        type="letters"
        delayChild={0.5}
      />
      <AnimatedText
        transition={{ duration: 0.5, type: "spring" }}
        staggerChildren={0.1}
        className="bold absolute translate-y-1 overflow-hidden"
        text="Ashton"
        TextVariants={IntroTextVariant}
        type="letters"
        delayChild={1.1}
      />
      <AnimatedText
        transition={{ duration: 0.5, type: "spring" }}
        staggerChildren={0.1}
        className="textStroke bold overflow-hidden"
        text="Ashton"
        TextVariants={IntroTextVariant}
        type="letters"
        delayChild={1}
      />
    </div>
  );
};

export default MoblieIntroText;

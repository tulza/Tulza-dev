import { IntroTextVariant } from "@/Framer/Variants";
import AnimatedText from "./AnimatedText";

const MoblieIntroText = () => {
  return (
    <div className="ml-4 flex flex-col items-center text-[5rem] leading-[6rem]">
      <div className="w-min">
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
          staggerChildren={0.05}
          className="textStroke bold overflow-hidden"
          text="I'm"
          TextVariants={IntroTextVariant}
          type="letters"
          delayChild={0.5}
        />
        <div className="relative flex">
          <AnimatedText
            transition={{ duration: 0.5, type: "spring" }}
            staggerChildren={0.05}
            className="bold absolute translate-y-1 overflow-hidden"
            text="Ashton"
            TextVariants={IntroTextVariant}
            type="letters"
            delayChild={0.9}
          />
          <AnimatedText
            transition={{ duration: 0.5, type: "spring" }}
            staggerChildren={0.05}
            className="textStroke bold overflow-hidden"
            text="Ashton"
            TextVariants={IntroTextVariant}
            type="letters"
            delayChild={0.8}
          />
        </div>
      </div>
    </div>
  );
};

export default MoblieIntroText;

import NavigationBar from "@components/Navigation/NavigationBar";
import { useContext } from "react";
import { ScreenProfileContext } from "@/App";
import MobileNavigation from "@components/Navigation/MobileNav";
import AnimatedText from "@components/AnimatedText";
import { blob } from "@/assets/indexImage";

const MainPage = () => {
  const isMobile = useContext(ScreenProfileContext);
  const AnimatedTextVariant = {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 1, y: 20 },
  };
  return (
    <div>
      <div className="mt-[1rem] flex w-full justify-center sm:mt-[2rem]">
        {isMobile ? <NavigationBar /> : <MobileNavigation />}
      </div>
      <AnimatedText
        transition={{ duration: 0.75, type: "spring" }}
        className="absolute bottom-0 overflow-hidden"
        text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        TextVariants={AnimatedTextVariant}
        type="word"
      />
    </div>
  );
};

export default MainPage;

import NavigationBar from "@components/Navigation/NavigationBar";
import { useContext } from "react";
import { ScreenProfileContext } from "@/App";
import MobileNavigation from "@components/Navigation/MobileNav";
import AnimatedText from "@components/AnimatedText";

const MainPage = () => {
  const isMobile = useContext(ScreenProfileContext);
  const AnimatedTextVariant = {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 10 },
  };
  return (
    <div>
      <div className="mt-[1rem] flex w-full justify-center sm:mt-[2rem]">
        {isMobile ? <NavigationBar /> : <MobileNavigation />}
      </div>
      <AnimatedText
        text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        TextVariants={AnimatedTextVariant}
        type="word"
      />
    </div>
  );
};

export default MainPage;

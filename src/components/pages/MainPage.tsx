import NavigationBar from "@components/Navigation/NavigationBar";
import { useContext } from "react";
import { ScreenProfileContext } from "@/App";
import MobileNavigation from "@components/Navigation/MobileNav";

const MainPage = () => {
  const isMobile = useContext(ScreenProfileContext);

  return (
    <div>
      <div className="mt-[1rem] flex w-full justify-center sm:mt-[2rem]">
        {isMobile ? <NavigationBar /> : <MobileNavigation />}
      </div>
    </div>
  );
};

export default MainPage;

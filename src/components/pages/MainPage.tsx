import NavigationBar from "@components/NavigationBar";
import { useContext } from "react";
import { ScreenProfileContext } from "@/App";
import MobileNavigation from "@components/MobileNav";

const MainPage = () => {
  const isMobile = useContext(ScreenProfileContext);

  return (
    <div>
      <div className="flex w-full justify-center sm:mt-[3rem]">
        {isMobile ? <NavigationBar /> : <MobileNavigation />}
      </div>
    </div>
  );
};

export default MainPage;

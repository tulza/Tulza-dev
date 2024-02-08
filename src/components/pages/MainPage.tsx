import NavigationBar from "@components/NavigationBar";
import { useContext } from "react";
import { ScreenProfileContext } from "@/App";
import MobileNavigation from "@components/MobileNav";

const MainPage = () => {
  const isMobile = useContext(ScreenProfileContext);

  return (
    <div>
      <div className="mt-[3rem] flex w-full justify-center">
        {isMobile ? <MobileNavigation /> : <NavigationBar />}
      </div>
    </div>
  );
};

export default MainPage;

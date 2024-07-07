import { useContext } from "react";
import ButtonWrapper from "./Wrapper/ButtonWrapper";
import { ScreenProfileContext, ThemeContext } from "@/App";
import { moon, sun } from "@svg/index";
import clsx from "clsx";

const ThemeButton = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDesktop = useContext(ScreenProfileContext);

  return (
    <ButtonWrapper
      className={clsx(
        "z-20 flex h-[40px] select-none items-center gap-4 rounded-xl outline-2 sm:pl-4 sm:outline",
        `${className}`,
      )}
      OnClick={() => {
        if (theme == "light") setTheme("Default");
        else setTheme("light");
      }}
    >
      {isDesktop && <>{theme}</>}
      <div className="flex aspect-square h-full w-full rounded-xl p-1 outline outline-1 sm:w-10">
        <img className="h-full w-full" src={theme == "light" ? moon : sun} />
      </div>
    </ButtonWrapper>
  );
};

export default ThemeButton;

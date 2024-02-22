import { useContext } from "react";
import ButtonWrapper from "./Wrapper/ButtonWrapper";
import { ScreenProfileContext, ThemeContext } from "@/App";
import { moon, sun } from "@/assets/indexImage";
import clsx from "clsx";

const ThemeButton = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDesktop = useContext(ScreenProfileContext);

  return (
    <div
      className={clsx(
        "z-20 flex h-[40px] items-center gap-4 rounded-xl outline-2 sm:pl-4 sm:outline",
        `${className}`,
      )}
    >
      {isDesktop && <>{theme}</>}
      <ButtonWrapper
        className="flex aspect-square h-full w-full rounded-xl p-1 outline outline-1 sm:w-10"
        OnClick={() => {
          if (theme == "light") setTheme("Default");
          else setTheme("light");
        }}
      >
        <img className="h-full w-full" src={theme == "light" ? moon : sun} />
      </ButtonWrapper>
    </div>
  );
};

export default ThemeButton;

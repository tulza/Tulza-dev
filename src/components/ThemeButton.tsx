import { useContext } from "react";
import ButtonWrapper from "./Wrapper/ButtonWrapper";
import { ThemeContext } from "@/App";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="fixed right-10 top-10 z-20">
      <ButtonWrapper
        OnClick={() => {
          setTheme("Default");
        }}
      >
        Default
      </ButtonWrapper>
      <ButtonWrapper
        OnClick={() => {
          setTheme("light");
        }}
      >
        Light
      </ButtonWrapper>
      current: {theme}
    </div>
  );
};

export default ThemeButton;

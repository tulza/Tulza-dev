import HighlightedText from "@components/HighlightedText";
import CodeText from "@ornament/CodeText";
import ButtonWrapper from "./ButtonWrapper";

const NavigationBar = () => {
  return (
    <div className="bold hover flex h-[5rem] w-[50rem] select-none items-center justify-between border-b border-t bg-black px-[5rem] tracking-wider">
      <CodeText text="A" />

      <ButtonWrapper>
        <HighlightedText text="About me" highlight="var(--blue)" />
      </ButtonWrapper>
      <ButtonWrapper>
        <HighlightedText text="Projects" highlight="var(--green)" />
      </ButtonWrapper>
      <ButtonWrapper>
        <HighlightedText text="Contacts" highlight="var(--yellow)" />
      </ButtonWrapper>
      <ButtonWrapper>
        <HighlightedText text="Resume" highlight="var(--purple)" />
      </ButtonWrapper>
    </div>
  );
};

export default NavigationBar;

import CodeText from "@ornament/CodeText";

export default {
  title: "CodeText",
  component: CodeText,
  argTypes: {
    variant: {
      text: ["primary", "secondary"],
      control: { type: "input" },
    },
  },
};

export const Nothing = () => <CodeText />;
export const WithText = () => <CodeText text="A" />;
export const Custom_Color = () => {
  return (
    <>
      <div className="flex flex-col">
        <CodeText text="R" color="#F00" />
        <CodeText text="G" color="#0F0" />
        <CodeText text="B" color="#00F" />
      </div>
    </>
  );
};

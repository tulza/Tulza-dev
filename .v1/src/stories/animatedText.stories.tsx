import AnimatedText from "@components/AnimatedText";

export default {
  title: "AnimatedText",
  component: AnimatedText,
  argTypes: {
    variant: {
      text: ["primary", "secondary"],
      control: { type: "input" },
    },
  },
};

const AnimatedTextVariant = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 1, y: 30 },
};

export const type_letters = () => (
  <div className="flex">
    <div className="mr-4 grid gap-10">
      <p>Normal:</p>
      <p>Overflow hidden:</p>
    </div>
    <div className="grid gap-10">
      <AnimatedText
        TextVariants={AnimatedTextVariant}
        className="h-min"
        type="letters"
        text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      />
      <AnimatedText
        TextVariants={AnimatedTextVariant}
        className="h-min overflow-hidden outline outline-1"
        type="letters"
        text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      />
    </div>
  </div>
);
export const type_words = () => (
  <div className="flex">
    <div className="mr-4 grid gap-10">
      <p>Normal:</p>
      <p>Overflow hidden:</p>
    </div>
    <div className="grid gap-10">
      <AnimatedText
        TextVariants={AnimatedTextVariant}
        className="h-min"
        type="word"
        text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      />
      <AnimatedText
        TextVariants={AnimatedTextVariant}
        className="h-min overflow-hidden outline outline-1"
        type="word"
        text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      />
    </div>
  </div>
);

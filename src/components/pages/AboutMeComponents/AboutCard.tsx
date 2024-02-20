import { motion } from "framer-motion";
import React, { ForwardedRef } from "react";
type AboutProps = {
  title?: string;
  titleElem?: React.ReactNode;
  text: string | string[];
};

const AboutCard = React.forwardRef(
  (
    { title, text, titleElem }: AboutProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    if (typeof text === "string") {
      text = [text];
    }

    return (
      <motion.div className="w-full pb-12 pt-4" ref={ref}>
        <p className="bold mb-4 text-[1.2rem] sm:text-xl">
          {titleElem ? titleElem : title}
        </p>
        <div className="space-y-2 text-[0.9rem] sm:text-base">
          {text.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      </motion.div>
    );
  },
);

export default AboutCard;

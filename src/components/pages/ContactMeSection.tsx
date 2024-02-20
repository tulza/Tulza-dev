import HighlightedText from "@components/HighlightedText";
import SectionSplitMargin from "@components/SectionSplitMargin";
import { ForwardedRef, forwardRef } from "react";

const ContactMeSection = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div>
      <SectionSplitMargin />
      <div className="h-[100vh]" ref={ref}>
        <div className="flex justify-center">
          <HighlightedText
            text="Contacts"
            highlight="var(--yellow)"
            className="bold my-10 text-3xl"
          />
        </div>
      </div>
    </div>
  );
});

export default ContactMeSection;

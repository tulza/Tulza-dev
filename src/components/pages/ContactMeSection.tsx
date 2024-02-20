import HighlightedText from "@components/HighlightedText";
import { ForwardedRef, forwardRef } from "react";
import { ContactLinkButton } from "./ContactComponents/ContactLinkButton";
import { GithubIcon, LinkedinIcon } from "@/assets/indexImage";
import SectionSplitMargin from "@components/SectionSplitMargin";

const ContactMeSection = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div>
      <SectionSplitMargin />
      <div className="h-[100vh]" ref={ref}>
        <div className="flex flex-col items-center gap-4">
          <HighlightedText
            text="Contacts"
            highlight="var(--yellow)"
            className="bold my-10 w-min text-3xl"
          />
          <div className="h-[400px] w-[300px] rounded-xl outline outline-1 sm:h-[600px] sm:w-[600px] lg:w-[1000px]"></div>
          <div className="flex gap-8">
            <ContactLinkButton
              label="Github"
              image={GithubIcon}
              link="https://github.com/tulza"
            />
            <ContactLinkButton label="Linkedin" image={LinkedinIcon} link="" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContactMeSection;

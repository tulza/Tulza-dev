import HighlightedText from "@components/HighlightedText";
import { ForwardedRef, forwardRef } from "react";
import { ContactLinkButton } from "./ContactComponents/ContactLinkButton";
import { GithubIcon, LinkedinIcon } from "@/assets/indexImage";
import SectionSplitMargin from "@components/SectionSplitMargin";
import EmailFormApi from "./ContactComponents/EmailFormApi";

const ContactMeSection = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div>
      <SectionSplitMargin />
      <div
        className="flex flex-col gap-4 sm:gap-8 nsm:justify-between"
        ref={ref}
      >
        <div className="flex flex-col items-center gap-4">
          <HighlightedText
            text="Contacts"
            highlight="var(--yellow)"
            className="bold my-10 w-min text-3xl"
          />
          <EmailFormApi className="bold p-4 text-base sm:p-8 sm:text-xl" />
        </div>
        <div className="bold flex flex-col items-center justify-center gap-4 whitespace-nowrap text-base sm:gap-8 sm:text-2xl lg:flex-row">
          <p>Also available on</p>
          <div className="mb-[2rem] flex items-center gap-4 sm:gap-8">
            <ContactLinkButton
              label="Github"
              image={GithubIcon}
              link="https://github.com/tulza"
            />
            <p>and</p>
            <ContactLinkButton label="Linkedin" image={LinkedinIcon} link="" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContactMeSection;

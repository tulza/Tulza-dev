import HighlightedText from "@components/HighlightedText";
import { ForwardedRef, forwardRef, useContext } from "react";
import { ContactLinkButton } from "./ContactComponents/ContactLinkButton";
import {
  GithubIcon,
  GithubIconLM,
  LinkedinIcon,
  LinkedinIconLM,
} from "@/assets/indexImage";
import SectionSplitMargin from "@components/SectionSplitMargin";
import EmailFormApi from "./ContactComponents/EmailFormApi";
import { ThemeContext } from "@/App";

const ContactMeSection = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const { theme } = useContext(ThemeContext);
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
        <div className="bold mb-[2rem] flex flex-col items-center justify-center gap-4 whitespace-nowrap text-base sm:gap-8 sm:text-2xl lg:flex-row">
          <p className="h-min">Also available on</p>
          <div className="flex items-center gap-4 sm:gap-8">
            <ContactLinkButton
              label="Github"
              image={theme == "light" ? GithubIconLM : GithubIcon}
              link="https://github.com/tulza"
            />
            <p>and</p>
            <ContactLinkButton
              label="Linkedin"
              image={theme == "light" ? LinkedinIconLM : LinkedinIcon}
              link=""
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContactMeSection;

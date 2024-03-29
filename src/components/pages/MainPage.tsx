import { Fragment, createContext, useContext, useRef } from "react";

import IntroSection from "./IntroSection";

import AboutMeSection from "./AboutMeSection";
import ProjectSection from "./ProjectSection";
import SectionSplit from "@components/SectionSplit";
import ContactMeSection from "./ContactMeSection";
import { ThemeContext } from "@/App";
import clsx from "clsx";

export const SectionRefContext = createContext<any>({
  IntroRef: null,
  AboutRef: null,
  ProjectRef: null,
});

const MainPage = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const sectionObjectRef = {
    IntroRef: ref,
    AboutRef: ref2,
    ProjectRef: ref3,
    ContactRef: ref4,
  };
  const { theme } = useContext(ThemeContext);
  return (
    <Fragment>
      <SectionRefContext.Provider value={sectionObjectRef}>
        <IntroSection ref={ref} />
        <SectionSplit />
        <div
          className={clsx(
            theme == "light"
              ? "grid-background-50-light"
              : "grid-background-50",
          )}
        >
          <AboutMeSection ref={ref2} />
          <ProjectSection ref={ref3} />
        </div>
        <SectionSplit />
        <ContactMeSection ref={ref4} />
      </SectionRefContext.Provider>
    </Fragment>
  );
};

export default MainPage;

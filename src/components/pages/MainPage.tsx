import { Fragment, createContext, useRef } from "react";

import IntroSection from "./IntroSection";

import AboutMeSection from "./AboutMeSection";
import TestComponent from "@components/TestComponent";
import ProjectSection from "./ProjectSection";
import SectionSplit from "@components/SectionSplit";

export const SectionRefContext = createContext<object>({
  IntroRef: null,
  AboutRef: null,
  ProjectRef: null,
});

const MainPage = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const sectionObjectRef = {
    IntroRef: ref,
    AboutRef: ref2,
    ProjectRef: ref3,
  };
  return (
    <Fragment>
      <SectionRefContext.Provider value={sectionObjectRef}>
        <div ref={ref} />
        <IntroSection />
        <SectionSplit />
        <div ref={ref2} />
        <AboutMeSection />
        <SectionSplit />
        <div ref={ref3} />
        <ProjectSection />
        <TestComponent />
      </SectionRefContext.Provider>
    </Fragment>
  );
};

export default MainPage;

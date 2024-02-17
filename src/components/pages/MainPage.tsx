import { Fragment } from "react";

import IntroSection from "./IntroSection";

import SectionFade from "@components/SectionFade";
import AboutMeSection from "./AboutMeSection";
import TestComponent from "@components/TestComponent";
const MainPage = () => {
  return (
    <Fragment>
      {/* <IntroSection /> */}
      <SectionFade />
      <AboutMeSection />
      <TestComponent />
    </Fragment>
  );
};

export default MainPage;

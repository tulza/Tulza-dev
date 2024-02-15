import React, { Fragment, useContext } from "react";

import IntroSection from "./IntroSection";

import SectionFade from "@components/SectionFade";
import AboutMeSection from "./AboutMeSection";
const MainPage = () => {
  return (
    <Fragment>
      <IntroSection />
      <SectionFade />
      <AboutMeSection />
    </Fragment>
  );
};

export default MainPage;

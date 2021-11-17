import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection, Pricing } from "../../components";
import Biography from "../biography/Biography1";
import InfoSectionRight from "../../components/InfoSectionRight/InfoSectionRight";
function Home() {
  return (
    <>
      <InfoSectionRight {...homeObjOne} />
      <Biography />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;

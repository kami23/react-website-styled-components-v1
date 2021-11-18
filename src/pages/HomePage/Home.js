import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection, Pricing } from "../../components";
import Biography from "../Biography/Biography1";
import InfoSectionRight from "../../components/InfoSectionRight/InfoSectionRight";
function Home() {
  return (
    <>
      <InfoSectionRight {...homeObjOne} />
      {/*   <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />*/}
    </>
  );
}

export default Home;

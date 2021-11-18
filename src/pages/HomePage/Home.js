import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection, Pricing } from "../../components";
import InfoSectionRight from "../../components/InfoSectionRight/InfoSectionRight";
import Biography from "../Biography/Biography1";
function Home() {
  return (
    <>
      <InfoSectionRight {...homeObjOne} />
      <Biography />
      {/*   <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />*/}
    </>
  );
}

export default Home;

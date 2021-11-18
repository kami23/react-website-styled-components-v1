import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection, Pricing } from "../../components";
import InfoSectionRight from "../../components/InfoSectionRight/InfoSectionRight";
import Bio from "../Bio/Bio";
function Home() {
  return (
    <>
      <InfoSectionRight {...homeObjOne} />
      <Bio />
      {/*   <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />*/}
    </>
  );
}

export default Home;

import React from "react";
import { homeObjOne } from "./Data";
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

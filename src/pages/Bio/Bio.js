import React from "react";
import { biography } from "./Data.js";
import BioSection from "../../components/Biography/bioSection.js";

export default function Bio() {
  return (
    <>
      <BioSection {...biography} />
    </>
  );
}

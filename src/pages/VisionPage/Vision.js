import React from "react";
import { FaSmile } from "react-icons/fa";
import { InfoSection } from "../../components";
export const VisionObjet = {
  primary: true,
  lightBg: true,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Marketing Agency",
  headline: "Ma vision",
  description:
    "We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.",
  button: false,
  buttonLabel: "",
  imgStart: "",
  img: "",
  alt: "Credit Card",
  start: false,
};
const Vision = () => {
  return <InfoSection {...VisionObjet} />;
};

export default Vision;

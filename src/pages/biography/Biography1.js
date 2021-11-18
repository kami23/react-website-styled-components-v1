import React from "react";
import { biography } from "./Data.js";
import { InfoSection } from "../../components";
import InfoSectionRight from "../../components/InfoSectionRight/InfoSectionRight.js";
import styled from "styled-components";
import img from "../../images/background.jpg";
import BioSection from "../../components/Biography/bioSection.js";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #082c64;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  padding: 0;
`;

export const Img = styled.img`
  vertical-align: middle;
  display: inline-block;
  height: 50%;
  padding: 0;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  max-width: 50%;
  background-color: red;
  padding: 0;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  max-width: 50%;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
  float: left;
`;

export default function Biography() {
  return (
    <>
      <BioSection {...biography} />
    </>
  );
}

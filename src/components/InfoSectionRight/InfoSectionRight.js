import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";
import { useTranslation } from "react-i18next";

function InfoSectionRight({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description01,
  description02,
  description03,
  description04,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
}) {
  const { t } = useTranslation();
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>

            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{t("Slogan")}</Heading>
                <Subtitle>{description01}</Subtitle>
                <Subtitle>{description02}</Subtitle>
                <Subtitle>{description03}</Subtitle>
                <Subtitle>{description04}</Subtitle>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSectionRight;

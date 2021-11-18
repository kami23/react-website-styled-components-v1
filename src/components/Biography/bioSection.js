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
} from "./bio-elements";
import { useTranslation } from "react-i18next";

function BioSection({
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
                <Heading lightText={lightText}>{t("Biography")}</Heading>
                <Subtitle>
                  {t(
                    "Born on the 25 of august 1986, Issam NECHMA took his baccalaureate in experimental sciences with a good mention in 2003 and went on to peruse his studies in United Kingdom starting his educational journey with and English diploma from king’s college of London which he obtained in 2004 where he was a member of University of London Union where he worked as a student representative for two years."
                  )}
                </Subtitle>
                <Subtitle>
                  {t(
                    "In 2007 he got an MSC In aerospace engineering from Queen Mary University (the university of London) and in 2010 he pursued a BSC in Financial mathematics at surrey University During his years of study in the UK he participated in associative work under different association such as the Arabic society association and the Greek society "
                  )}
                </Subtitle>
                <Subtitle>
                  {t(
                    "A member and an affiliate mechanical engineer at the IMechE institution of England since 2007" +
                      "Certificate in aviation specializing in stability and control from the Cranfield airport "
                  )}
                </Subtitle>
                <Subtitle>
                  {t(
                    "He is today the general manager of an industrial group and the president of the sports club “Esperance sportive d’El hadjar” " +
                      "With a young mindset and a passion for development NECHMA Issam today decides to give back to his community and participate in the development of his region by sharing his ideas and development project. As a in the People's Provincial Assembly elections, NECHMA Issam will be in the most adequate place to participate in improving the everyday lives of his community members and creating a better tomorrow."
                  )}
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default BioSection;

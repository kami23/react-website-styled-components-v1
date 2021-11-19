import React from "react";
import { Container } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Devider,
  InfoColumnPic
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
          <InfoRow imgStart={imgStart}>
            <InfoColumnPic>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumnPic>

            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{t("Biography")}</Heading>
                <Subtitle>
                  {t(

"Issam NECHMA, General Manager of an industrial Group and president of the Al-Taraji Sports Club Of el-Hadjar, holder a bachelor's of science in financial mathematics and a master's degree in aerospace engineering. A member an affiliate mechanical engineer of the IMechE institute of England since 2007.")}
                </Subtitle>
                <Devider/>
                <Subtitle>
                  {t(
"Born on 1986 in Annaba where he grew up and studied until he received a bachelor's degree in experimental sciences in 2003. He later on moved to England to peruse higher education, first, receiving a diploma in English language from King's College London in 2004, then specializing in aerospace engineering obtaining a Master's degree in 2007 from Queen Mary University (University of London) and earning an aviation certificate specializing in stability and control from Cranfield Airport."
)}
                </Subtitle>
                <Subtitle>
                  {t(
          "During his time at the University of London, he was no stranger to social work and student movements, as he was a member of the University of London Union where he served as a student representative for two years. He also joined many social organizations such as the Arab Society Organization, the Greek Society and many others. He then perused a bachelor’s of science in financial mathematics at the University of Surrey, that he obtained in 2010. Following graduation and after assembling enough experience, Issam NECHMA returned home, intending to participate in the development of the local community and the nation using all possible means."
          )}
                </Subtitle>
                <Subtitle>
                  {t(
   "Since his return, he took part in running the family business, established by his father in 1990 until he was handed over the responsibility of running it in 2014. As the general manager, he played a pivotal role in transforming the company into an industrial group with an important position in the local and national market, thus proving his high competency for management and business development. This encouraged him to share his experiences to promote local development projects and help his fellow compatriots create the suitable conditions for growth in order to build a better tomorrow and a better future for Algeria. Front El-Moustakbel Party was the most adequate for his own principles and goals so he joined it, running afterwards for People's Provincial Assembly elections in 2012."
   )}
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
      </InfoSec>
    </>
  );
}

export default BioSection;

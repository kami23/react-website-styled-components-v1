import styled from "styled-components";
export const MainContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1500px;
  padding: 0;

  @media screen and (max-width: 991px) {
    padding: 0;
  }
`;
export const InfoSec = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#082c64")};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  @media screen and (max-width: 920px) {
  }
`;

export const InfoColumn = styled.div`
  padding: 0;
  flex: 1;
  flex-basis: 30%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    display: flex;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 340px;
  padding-top: 0;
  padding-bottom: 70px;
  justify-content: center;
  display: flex;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImgWrapper = styled.div`
  width: 780px;
  height: 680px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  @media screen and (max-width: 920px) {
    max-width: 655px;
    height: 355px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#082c64")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  width: 100%;
  vertical-align: middle;
  display: inline-block;
  height: 100%;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 920px) {
    justify-content: center;
    display: flex;
    align-items: center;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import styled from "styled-components";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  NameSite,
} from "./Navbar.elements";

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: red;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [selectedLang, setSelectedLang] = useState("en");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  const { t } = useTranslation();
  const changeLanguage = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
    i18n.dir();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#082c64" }}>
        <Nav>
          <NavLogo>
            <NameSite onClick={closeMobileMenu}> {t("Issam NECHMA")}</NameSite>
          </NavLogo>
          <NavbarContainer>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  {t("Home")}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/biography" onClick={closeMobileMenu}>
                  {t("Biography")}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/vision" onClick={closeMobileMenu}>
                  {t("Vision")}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products" onClick={closeMobileMenu}>
                  {t("Values")}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products" onClick={closeMobileMenu}>
                  {t("Activities")}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products" onClick={closeMobileMenu}>
                  {t("Intervision")}
                </NavLinks>
              </NavItem>
              {/*    <DropDownLi>
                <Dropbtn onClick={() => this.handleClick("DropDown")}>
                  DropDown
                </Dropbtn>
                <DropDownContent>
                  {" "}
                  <NavLinks>Link 1</NavLinks>
                  <NavLinks>Link 2</NavLinks>
                  <NavLinks>Link 3</NavLinks>
                </DropDownContent>
          </DropDownLi>*/}
            </NavMenu>
            <SocialMedia>
              <SocialMediaWrap>
                <SocialIcons>
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                    <FaTwitter />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.linkedin.com/in/issamnechma/?originalSubdomain=dz"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
            <NavItemBtn>
              {selectedLang == "ar" ? (
                <Button onClick={() => changeLanguage("en")}>English</Button>
              ) : (
                <Button onClick={() => changeLanguage("ar")}>Arabic</Button>
              )}
            </NavItemBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;

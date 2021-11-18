import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  NameSite,
  Button,
} from "./Navbar.elements";

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
    document.body.dir = i18n.dir();
    if (button) console.log(button);
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
              {!button ? (
                <>
                  {selectedLang === "ar" ? (
                    <Button onClick={() => changeLanguage("en")}>
                      English
                    </Button>
                  ) : (
                    <Button onClick={() => changeLanguage("en")}>
                      العربية
                    </Button>
                  )}
                </>
              ) : (
                <></>
              )}
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
                  {t("Fields of intervention")}
                </NavLinks>
              </NavItem>
              {/*<DropDownLi>
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
            <NavItemBtn>
              {button ? (
                <>
                  {selectedLang === "ar" ? (
                    <Button fontBig={true} onClick={() => changeLanguage("en")}>
                      English
                    </Button>
                  ) : (
                    <Button onClick={() => changeLanguage("ar")}>
                      العربية
                    </Button>
                  )}
                </>
              ) : (
                <>
                  {selectedLang === "ar" ? (
                    <Button fontBig={true} onClick={() => changeLanguage("en")}>
                      En
                    </Button>
                  ) : (
                    <Button onClick={() => changeLanguage("ar")}>Ar</Button>
                  )}
                </>
              )}
            </NavItemBtn>
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
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;

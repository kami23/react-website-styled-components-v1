import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    height: 90px;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #082c64;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 5px;
    right: 0;
  }
`;

export const NameSite = styled.span`
  font-size: 2rem;
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-start;
  cursor: pointer;
  font-weight: bolder;
  margin-left: 0.5rem;
  width: 400px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  color: #082c64;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding-left: 5rem;
  font-size: 26px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: white;
    font-size: 28px;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #082c64;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const SocialMedia = styled.div`
  max-width: 200px;
  width: 100%;
  @media screen and (max-width: 820px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  margin-top: 20px;
  margin-left: 1rem;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    display: block;
    top: 0;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
`;

export const SocialIconLink = styled.a`
  color: black;
  font-size: 40px;
  margin-left: 0.5rem;
  @media screen and (max-width: 960px) {
    font-size: 30px;
  }
`;

export const Button = styled.button`
  background: lightgray;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #082c64;
  font-size: 24px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 0px 4px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 10px;
    color: #fff;
    background: #082c64;
  }
`;

export const NavItemBtn = styled.section`
  display: flex;
  justify-content: center;
  padding: 0;
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    top: 50px;
    left: 120px;
    position: absolute;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { hero } from "../hero-context";

const Header = styled.header`
  position: fixed;
  width: 100%;
  background-color: #21212c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 1144px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const LogoContainer = styled.div`
  font-size: 18px;
  margin-left: 1.5rem;
  cursor: pointer;
`;

const Logo = styled.p`
  font-weight: 700;

  & span {
    color: #fff;
    text-decoration: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  min-width: 375px;
  justify-content: space-between;

  & > span {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    padding: 1.26rem 1.5rem;
    transition: all 0.7s;
    cursor: pointer;

    &:hover {
      background-color: dodgerblue;
    }
  }

  @media only screen and (max-width: 700px) {
    position: fixed;
    height: calc(100vh - 57px);
    min-width: 320px;
    width: 100%;
    top: 57px;
    left: ${({ isOpen }) => (isOpen ? "0" : "100%")};
    background-color: #21212c;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;

    & span {
      width: calc(100% - 48px);
      text-align: center;
    }
  }
`;

const BtnMenu = styled.div`
  width: 35px;
  height: 40px;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 1.26rem;
  display: none;

  @media only screen and (max-width: 700px) {
    display: flex;
  }

  & div {
    background-color: #fff;
    width: 100%;
    height: 4px;
  }
`;

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  const LinkScrollTop = () => {
    setNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const LinkScrollBottom = () => {
    setNavOpen(false);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const LinkScrollServices = () => {
    setNavOpen(false);
    window.scrollTo({ top: hero.height, behavior: "smooth" });
  };

  return (
    <Header>
      <Nav>
        <LogoContainer>
          <Logo>
            <span onClick={LinkScrollTop}>HomeSolutions</span>
          </Logo>
        </LogoContainer>
        <LinkContainer isOpen={navOpen}>
          <span onClick={LinkScrollServices}>Servicios</span>
          <span onClick={LinkScrollBottom}>Contactos</span>
          <span onClick={LinkScrollBottom}>Sobre Nosotros</span>
        </LinkContainer>
        <BtnMenu onClick={() => setNavOpen(!navOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </BtnMenu>
      </Nav>
    </Header>
  );
}

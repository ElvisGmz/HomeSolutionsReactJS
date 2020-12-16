import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

const Logo = styled.p`
  font-weight: 700;

  & a {
    color: #fff;
    text-decoration: none;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  min-width: 375px;
  justify-content: space-between;

  & > a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    padding: 1.26rem 1.5rem;
    transition: all 0.7s;

    &:hover {
      background-color: dodgerblue;
    }
  }

  @media only screen and (max-width: 700px) {
    position: fixed;
    height: calc(100vh - 57.5px);
    min-width: 320px;
    width: 100%;
    top: 57.5px;
    left: ${({ isOpen }) => (isOpen ? "0" : "100%")};
    background-color: #21212c;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;

    & a {
      width: 100%;
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

  return (
    <Header>
      <Nav>
        <LogoContainer>
          <Logo>
            <Link to="/">HomeSolutions</Link>
          </Logo>
        </LogoContainer>
        <LinksContainer isOpen={navOpen}>
          <Link to="/Login">Iniciar Sesion</Link>
          <Link to="/Register">Registrarme</Link>
          <Link to="/About">Sobre Nosotros</Link>
        </LinksContainer>
        <BtnMenu onClick={() => setNavOpen(!navOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </BtnMenu>
      </Nav>
    </Header>
  );
}

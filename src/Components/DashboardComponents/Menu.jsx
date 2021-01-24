import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  faBars,
  faBrush,
  faClipboardList,
  faConciergeBell,
  faAddressCard,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <MenuContainer ancho={isOpen ? "310px" : "50px"}>
      <Bar>
        <BurguerBtn onClick={() => setOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </BurguerBtn>

        <Items>
          <Link to="/admin/setview">
            <FontAwesomeIcon icon={faBrush} />
          </Link>
          <Link to="/admin/list">
            <FontAwesomeIcon icon={faClipboardList} />
          </Link>
          <Link to="/admin/services">
            <FontAwesomeIcon icon={faConciergeBell} />
          </Link>
          <Link to="/admin/setabout">
            <FontAwesomeIcon icon={faAddressCard} />
          </Link>
        </Items>

        <LogOutBtn>
          <FontAwesomeIcon icon={faTimesCircle} />
        </LogOutBtn>
      </Bar>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  background-color: #21212c;
  color: #fff;
  box-sizing: border-box;
  width: 100%;
  max-width: ${({ ancho }) => ancho};
  display: flex;
  transition: all 0.2s;
  min-height: 320px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  overflow: hidden;
`;

const Bar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #21212c;
  border-right: 1px solid #34344d;
  font-size: 26px;
`;

const BurguerBtn = styled.span`
  cursor: pointer;
  background-color: #21212c;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;

  &:hover,
  &:hover:after {
    background-color: #0fb140;
  }

  &:after {
    content: "Menu";
    box-sizing: border-box;
    padding-left: 10px;
    position: absolute;
    left: 51px;
    font-size: 16px;
    width: 260px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: 0.2s all;
  }
`;

const Items = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  & a {
    color: #fff;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;

    &:after {
      box-sizing: border-box;
      padding-left: 10px;
      position: absolute;
      left: 51px;
      font-size: 16px;
      width: 260px;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      transition: 0.2s all;
    }

    &:nth-child(1):after {
      content: "Ajustes de Banner";
    }

    &:nth-child(2):after {
      content: "Lista de Pedidos";
    }

    &:nth-child(3):after {
      content: "Modificar Servicios";
    }

    &:nth-child(4):after {
      content: "Ajustes de Contactos";
    }

    &:hover, &:hover:after {
      background-color: #0e68c2;
    }
  }
`;

const LogOutBtn = styled.span`
  cursor: pointer;
  background-color: #21212c;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;



  &:after {
      content: 'Cerrar Sesion';
      box-sizing: border-box;
      padding-left: 10px;
      position: absolute;
      left: 51px;
      font-size: 16px;
      width: 260px;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      transition: 0.2s all;
    }

  &:hover, &:hover:after {
    background-color: crimson;
  }
`;

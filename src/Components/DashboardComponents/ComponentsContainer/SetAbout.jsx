import React from "react";
import styled from "styled-components";

export default function SetAbout() {
  return (
    <CardContainer>
      <h1>Informacion y Contacto</h1>
      <p>Clic en una para editar o doble clic para eliminar</p>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  min-width: 280px;
  width: 100%;
  max-width: 1144px;
  height: 100%;
  max-height: 600px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-flow: row wrap;
  box-sizing: border-box;
  padding: 1rem;
  overflow-y: scroll;
  margin-top: 1rem;

  & > h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 0;
  }

  & > p {
    width: 100%;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 1155px) {
    height: auto;
    max-height: 100%;
    border-radius: 0px;
  }
`;

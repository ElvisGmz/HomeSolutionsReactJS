import React from "react";
import styled from "styled-components";

const Content = styled.div`
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  padding: 1rem;
  height: 100vh;
  box-sizing: border-box;
  width: 100%;
  z-index: 10000;
`;

export default function Container() {
  return (
    <>
      <Content>Hello World</Content>
    </>
  );
}

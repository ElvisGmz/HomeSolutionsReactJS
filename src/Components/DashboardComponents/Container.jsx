import React from "react";
import styled from "styled-components";
import SetViewHero from './ComponentsContainer/SetViewHero'

const Content = styled.div`
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  padding:1rem;
  min-height: 100vh;
  box-sizing: border-box;
  width: 100%;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 50px;
`;

export default function Container() {
  return (
    <>
      <Content>
        <SetViewHero />
      </Content>
    </>
  );
}

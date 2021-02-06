import React from "react";
import styled from "styled-components";
import Menu from "./DashboardComponents/Menu";
import Container from "./DashboardComponents/Container";

const DashboardContainer = styled.div`
  display: flex;
  align-items: stretch;
  overflow-x: hidden;
`;

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Menu />
      <Container />
    </DashboardContainer>
  );
}

import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import SetViewHero from "./ComponentsContainer/SetViewHero";
import ViewList from "./ComponentsContainer/ViewList";
import SetServices from "./ComponentsContainer/SetServices";

const Content = styled.div`
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  padding: 1rem;
  min-height: 100vh;
  box-sizing: border-box;
  width: 100%;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  position: relative;
  margin-left: 50px;

  @media only screen and (max-width: 1155px) {
    padding: 0;
    border-radius: 0;
  }
`;

export default function Container() {
  return (
    <Content>
      <Switch>
        <Route exact path="/admin" component={SetViewHero} />
        <Route exact path="/admin/list" component={ViewList} />
        <Route exact path="/admin/services" component={SetServices} />
      </Switch>
    </Content>
  );
}

import React from "react";
import styled from "styled-components";

const Row = styled.footer`
  background-color: #152838;
  width: 100%;
`;

const FooterContainer = styled.div`
  max-width: 1144px;
  height: 100%;
  padding: 1.5rem 10px;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-flow: row wrap;
  color: #fff;
`;

const Box = styled.div`
  box-sizing: border-box;
  min-width: 173px;
  flex: 29%;
  max-width: 400px;
  margin: 10px;

  & h1 {
    font-weight: 500;
    font-size: 20px;
    color: cyan;
  }

  & p {
    font-weight: 200;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 18px;
  }
`;

const CopyFooter = styled.div`
    width: 100%;
    margin-top: 15px;
    border-top: 1px #ffffff22 solid;
    padding-top: 22px;
    text-align: center;
`

export default function Footer() {
  return (
    <>
      <Row>
        <FooterContainer>
          <Box>
            <h1>Contactos</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium temporibus veritatis non neque consectetur? Quos,
              reiciendis ullam aut aspernatur nisi similique, et quibusdam ipsum
              quaerat beatae libero totam, voluptatibus quis?
            </p>
          </Box>
          <Box>
            <h1>Dirección</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium temporibus veritatis non neque consectetur? Quos,
              reiciendis ullam aut aspernatur nisi similique, et quibusdam ipsum
              quaerat beatae libero totam, voluptatibus quis?
            </p>
          </Box>
          <Box>
            <h1>Sobre Nosotros</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium temporibus veritatis non neque consectetur? Quos,
              reiciendis ullam aut aspernatur nisi similique, et quibusdam ipsum
              quaerat beatae libero totam, voluptatibus quis?
            </p>
          </Box>
          <CopyFooter>
              HomeSolutions &copy; - Made With ❤ for SGK.dev
          </CopyFooter>
        </FooterContainer>
      </Row>
    </>
  );
}

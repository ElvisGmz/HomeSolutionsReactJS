import React from "react";
import styled from "styled-components";
import {
  faFacebookSquare,
  faLinkedin,
  faInstagramSquare,
  faWhatsappSquare
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    font-size: 13px;
    letter-spacing: 1px;
    line-height: 18px;
  }

&:nth-child(1){
  max-width: 200px;

  @media only screen and (max-width: 405px){
    max-width: 100%;
  }

}

&:nth-child(3){

  @media only screen and (max-width: 600px){
    max-width: 100%;
  }

}

`;

const ContactsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 10px;
  box-sizing: border-box;

  &:last-child{
    margin-bottom: 0px;
  }

  & span{
    margin-left: 10px;
    font-size: 13px;
  }
`

const CopyFooter = styled.div`
  width: 100%;
  margin-top: 15px;
  border-top: 1px #ffffff22 solid;
  padding-top: 22px;
  text-align: center;
`;

const Button = styled.button`
  box-sizing: border-box;
  background-color: #1fa075;
  padding: 10px;
  border: 0;
  border-radius: 3px;
  color: #FFF;
  outline: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    background-color: #0d6447;
  }
`

export default function Footer() {
  return (
    <>
      <Row>
        <FooterContainer>
          <Box>
            <h1>Contactos</h1>
            <ContactsContainer>
              <FontAwesomeIcon size="lg" icon={faFacebookSquare} />
              <span> @HomeSol</span>
            </ContactsContainer>
            <ContactsContainer>
              <FontAwesomeIcon size="lg" icon={faInstagramSquare} />
              <span> @HomeSol</span>
            </ContactsContainer>
            <ContactsContainer>
              <FontAwesomeIcon size="lg" icon={faLinkedin} />
              <span> @HomeSol</span>
            </ContactsContainer>
            <ContactsContainer>
              <FontAwesomeIcon size="lg" icon={faWhatsappSquare} />
              <span>+503 4772 3212</span>
            </ContactsContainer>
            <ContactsContainer>
              <FontAwesomeIcon size="lg" icon={faPhoneSquare} />
              <span>+503 4772 3212</span>
            </ContactsContainer>
          </Box>
          <Box>
            <h1>Dirección</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium temporibus veritatis non neque consectetur? Quos,
              reiciendis ullam aut aspernatur nisi similique
            </p>
            <Button onClick={() => window.open("https://goo.gl/maps/TUcPzvMyXw7nzdFV8", "_blank")}>
              
            <FontAwesomeIcon size="lg" icon={faMap} /> Ver en Maps</Button>
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

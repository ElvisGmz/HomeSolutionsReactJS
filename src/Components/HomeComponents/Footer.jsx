import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const [about, setAbout] = useState([]);
  const [address, setAddress] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(`https://backend-ugb-social-hours.vercel.app/api/about`)
      .then((res) => res.json())
      .then((resJson) => setAbout(resJson.data));

    fetch(`https://backend-ugb-social-hours.vercel.app/api/address`)
      .then((res) => res.json())
      .then((resJson) => setAddress(resJson.data));

      fetch(`https://backend-ugb-social-hours.vercel.app/api/contacts`)
      .then((res) => res.json())
      .then((resJson) => setContacts(resJson.data));

  }, []);

  return (
    <>
      <Row>
        <FooterContainer>
          <Box>
            <h1>Contactos</h1>
           {
           contacts.map(
            contact=>
            <ContactsContainer>
            <i class={contact.icon}></i>
            <span>{contact.name}</span>
          </ContactsContainer>
          )
          }
          </Box>
          <Box>
            <h1>Dirección</h1>
            <p>{address[0] === undefined ? "" : address[0].address}</p>
            <p>{address[0] === undefined ? "" : address[0].secondLine}</p>
            {address[0] !== undefined ? (
              <Button
                onClick={() =>
                  window.open(
                    address[0] === undefined ? "" : address[0].url,
                    "_blank"
                  )
                }
              >
                <FontAwesomeIcon size="lg" icon={faMap} /> Ver en Maps
              </Button>
            ) : (
              ""
            )}
          </Box>
          <Box>
            <h1>{about[0] === undefined ? "" : about[0].title}</h1>
            <p>{about[0] === undefined ? "" : about[0].text}</p>
          </Box>
          <CopyFooter>
            HomeSolutions &copy; - Made With ❤ for SGK.dev
          </CopyFooter>
        </FooterContainer>
      </Row>
    </>
  );
}

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

  &:nth-child(1) {
    max-width: 200px;
    user-select: text;

    @media only screen and (max-width: 405px) {
      max-width: 100%;
    }
  }

  &:nth-child(3) {
    @media only screen and (max-width: 600px) {
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

  &:last-child {
    margin-bottom: 0px;
  }

  & span {
    margin-left: 10px;
    font-size: 13px;
  }
`;

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
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #0d6447;
  }
`;

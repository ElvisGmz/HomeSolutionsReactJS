import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { hero } from "../../hero-context";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://backend-ugb-social-hours.vercel.app/api/cards`)
      .then((res) => res.json())
      .then((resJson) => setServices(resJson.data));
  }, []);

  return (
    <>
      <Row>
        <Title>Nuestros Servicios</Title>
        <CardsContainer>
          {services.map(
            ({ icon, title, description, descriptionForm, _id }) => (
              <Card key={_id} onClick={scrollTop}>
                <Icon src={icon} />
                <h1>{title}</h1>
                <p>{description}</p>
              </Card>
            )
          )}
        </CardsContainer>
      </Row>
    </>
  );
}

const Row = styled.div`
  min-height: 200px;
  background-color: #ebf8ff;
  padding: 25px 0px 3rem;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 38px;
  text-align: center;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-flow: row wrap;
  max-width: 1144px;
  box-sizing: border-box;
  margin: auto;
  padding: 10px 10px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  box-sizing: border-box;
  flex: 30%;
  min-width: 280px;
  background-color: #10264e;
  min-height: 250px;
  margin: 5px;
  padding: 2rem 25px;
  cursor: pointer;
  transition: all 0.3s;
  max-width: 400px;
  border-radius: 5px;

  & * {
    text-align: center;
  }

  &:active {
    transform: scale(0.975);
  }

  & h1 {
    color: #f4ff5f;
    font-size: 22px;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 0px;
    font-weight: 400;
  }

  & p {
    color: #ffffff;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 18px;
  }
`;

const Icon = styled.img`
  height: 100px;
  object-fit: cover;
`;

const scrollTop = () => {
  window.scrollTo({ top: hero.top - 70, behavior: "smooth" });
};

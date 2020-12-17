import React from "react";
import styled from "styled-components";

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

    & *{
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
    font-weight: 100;
  }

  & p {
    color: #ffffff;
    font-size: 14px;
    font-weight: 100;
    letter-spacing: 1px;
    line-height: 18px;
  }
`;

const Icon = styled.img`
  height: 100px;
  object-fit: cover;
`;

export default function Services() {
  return (
    <>
      <Row>
        <Title>Nuestros Servicios</Title>
        <CardsContainer>
          <Card>
            <Icon src="https://res.cloudinary.com/superfolio/image/upload/v1608151891/homesol/pared_mbq9hr.svg" />
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptatum corrupti reprehenderit dolores nobis natus minima
              quibusdam molestias labore! Quae obcaecati tenetur voluptate
              beatae. Accusamus, saepe deleniti! Iste, cum alias?
            </p>
          </Card>
          <Card>
            <Icon src="https://res.cloudinary.com/superfolio/image/upload/v1608151891/homesol/roller-paint_idwmu5.svg" />
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptatum corrupti reprehenderit dolores nobis natus minima
              quibusdam molestias labore! Quae obcaecati tenetur voluptate
              beatae. Accusamus, saepe deleniti! Iste, cum alias?
            </p>
          </Card>
          <Card>
            <Icon src="https://res.cloudinary.com/superfolio/image/upload/v1608151891/homesol/pared-de-vidrio_afnmwg.svg" />
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptatum corrupti reprehenderit dolores nobis natus minima
              quibusdam molestias labore! Quae obcaecati tenetur voluptate
              beatae. Accusamus, saepe deleniti! Iste, cum alias?
            </p>
          </Card>
          <Card>
            <Icon src="https://res.cloudinary.com/superfolio/image/upload/v1608151891/homesol/bloquear_bhz71x.svg" />
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptatum corrupti reprehenderit dolores nobis natus minima
              quibusdam molestias labore! Quae obcaecati tenetur voluptate
              beatae. Accusamus, saepe deleniti! Iste, cum alias?
            </p>
          </Card>
          <Card>
            <Icon src="https://res.cloudinary.com/superfolio/image/upload/v1608152470/homesol/sierra-circular_pefbeq.svg" />
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptatum corrupti reprehenderit dolores nobis natus minima
              quibusdam molestias labore! Quae obcaecati tenetur voluptate
              beatae. Accusamus, saepe deleniti! Iste, cum alias?
            </p>
          </Card>
          <Card>
            <Icon src="https://res.cloudinary.com/superfolio/image/upload/v1608151891/homesol/tubo_l7en3p.svg" />
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptatum corrupti reprehenderit dolores nobis natus minima
              quibusdam molestias labore! Quae obcaecati tenetur voluptate
              beatae. Accusamus, saepe deleniti! Iste, cum alias?
            </p>
          </Card>
        </CardsContainer>
      </Row>
    </>
  );
}

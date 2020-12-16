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
  padding: 10px 20px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  box-sizing: border-box;
  flex: 30%;
  min-width: 280px;
  background-color: #21212c;
  min-height: 250px;
  margin: 5px;
  padding: 1.5rem 20px;
  cursor: pointer;
  transition: all 0.3s;
  max-width: 400px;

    & *{
        text-align: center;
    }

  &:active {
    transform: scale(0.975);
  }

  & h1 {
    color: #fff;
    font-size: 16px;
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 5px;
  }

  & p {
    color: #fff;
    font-size: 13px;
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
        <Title>Te ofrecemos</Title>
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

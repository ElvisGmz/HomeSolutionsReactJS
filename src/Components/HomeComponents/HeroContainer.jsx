import React, { useContext, useRef, useEffect, useState } from "react";
import styled from "styled-components";
import HeroContext from "../../hero-context";

export default function HeroContainer() {
  const [heroData, setHeroData] = useState([]);
  const { setHeight, setTop } = useContext(HeroContext);
  const getHeight = useRef();
  const getTop = useRef();

  useEffect(() => {
    fetch(`https://backend-ugb-social-hours.vercel.app/api/hero`)
      .then((res) => res.json())
      .then((resJson) => setHeroData(resJson.data));
  }, []);

  useEffect(() => {
    setHeight(getHeight.current.scrollHeight);
    setTop(getTop.current.getBoundingClientRect().top);
  }, [setHeight, setTop]);

  return (
    <React.Fragment>
      <HeroBanner
        banner={heroData[0] === undefined ? "" : heroData[0].imgBackground}
      >
        <HeroRow ref={getHeight}>
          <HeroTextContainer>
            {heroData.map(({ _id, title, description }) => (
              <div key={_id}>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
            ))}
          </HeroTextContainer>
          <HeroForm ref={getTop}>
            <Header>Cotiza Gratis</Header>
            <Input
              width="100%"
              type="text"
              bgColor="#f0f0f0"
              txtColor="#000"
              placeholder="Nombre y Apellidos"
              required
            />
            <Input
              width="100%"
              type="text"
              bgColor="#f0f0f0"
              txtColor="#000"
              placeholder="Direccion"
              required
            />
            <Input
              width="38%"
              type="text"
              bgColor="#f0f0f0"
              txtColor="#000"
              placeholder="Codigo Postal"
              required
            />
            <Input
              width="60%"
              type="text"
              bgColor="#f0f0f0"
              txtColor="#000"
              placeholder="Telefono"
              required
            />
            <Input
              width="100%"
              type="email"
              bgColor="#f0f0f0"
              txtColor="#000"
              placeholder="Correo Electronico"
              required
            />
            <Description
              placeholder="Describenos que reparacion o reforma necesitas realizar"
              required
            />
            <Hr />
            <label>Adjunta una Foto o un Plano:</label>
            <Input width="100%" type="file" bgColor="#f0f0f0" txtColor="#000" />
            <label htmlFor="checkUrgence">Urgente: </label>
            <Input
              width="auto"
              id="checkUrgence"
              type="checkbox"
              bgColor="dodgerblue"
              txtColor="#FFF"
            />
            <Input
              width="100%"
              type="submit"
              bgColor="dodgerblue"
              txtColor="#FFF"
            />
          </HeroForm>
        </HeroRow>
      </HeroBanner>
    </React.Fragment>
  );
}

const HeroBanner = styled.div`
  min-height: 575px;
  height: calc(100vh - 57px);
  padding-top: 57px;
  max-height: 700px;

  &:before {
    position: absolute;
    background-color: #21212c;
    background-image: url(${({ banner }) => banner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    min-height: 1050px;
    width: 100%;
    z-index: -100;
    filter: brightness(25%);
    max-height: 700px;

    @media only screen and (max-width: 768px) {
      height: 100%;
      max-height: 1050px;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 100%;
    max-height: 1050px;
  }
`;

const HeroRow = styled.div`
  min-height: 575px;
  height: calc(100vh - 57px);
  max-height: 700px;
  width: 100%;
  max-width: 1144px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  box-sizing: border-box;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    flex-flow: column nowrap;
    height: 100%;
    max-height: 1050px;
  }
`;

const HeroTextContainer = styled.div`
  width: 100%;
  max-width: 550px;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
`;

const HeroForm = styled.form`
  background-color: #fff;
  box-sizing: border-box;
  max-width: 400px;
  border-radius: 10px;
  padding: 20px;
  margin: 5px;
  margin-bottom: 20px;

  & label {
    font-size: 12px;
    margin: 10px 0px 5px;
    font-weight: 900;
  }
`;

const Header = styled.h1`
  font-size: 22px;
  margin: 5px 0px 10px;
  text-align: center;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 0.7rem;
  width: ${({ width }) => width};
  border: 0;
  border-radius: 5px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ txtColor }) => txtColor};
  outline: 0;
  margin-bottom: 10px;
  margin-top: 5px;

  &:nth-child(4) {
    margin-right: 2%;
  }

  &:last-child {
    margin-bottom: 0;
    margin-top: 20px;
  }

  &[type="checkbox"] {
    position: absolute;
    z-index: -10;
  }

  &[type="submit"] {
    cursor: pointer;
  }

  &[type="submit"]:hover,
  &[type="submit"]:active {
    background-color: #156fc9;
  }
`;

const Description = styled.textarea`
  box-sizing: border-box;
  font-variant: normal;
  padding: 0.7rem;
  width: 100%;
  min-height: 60px;
  border: 0;
  border-radius: 5px;
  background-color: #f0f0f0;
  outline: 0;
  margin-bottom: 10px;
  margin-top: 5px;
  resize: none;

  &:last-child {
    margin-bottom: 0;
    margin-top: 10px;
  }
`;

const Hr = styled.hr`
  outline: 0;
  border: 0;
  background-color: #cecece;
  height: 1px;
  margin-bottom: 10px;
`;

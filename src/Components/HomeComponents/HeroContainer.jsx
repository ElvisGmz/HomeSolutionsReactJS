import React from "react";
import styled from "styled-components";

const HeroBanner = styled.div`
  background-image: url("https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 57.6px);
  padding-top: 57.6px;
  /* max-height: 700px; */
`;

const HeroRow = styled.div`
  min-height: calc(100vh - 57.6px);
  width: 100%;
  max-width: 1144px;
  background-color: #21212cdd;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  box-sizing: border-box;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    flex-flow: column nowrap;
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
  padding: 10px;
  margin: 5px;

  & label{
    font-size: 12px;
    margin: 10px 0px 5px;
    font-weight: 900;
  }
`;

const Header = styled.h1`
  font-size: 22px;
  margin: 5px 0px 10px;
  text-align: center;
`

const Input = styled.input`
  box-sizing: border-box;
  padding: 0.7rem;
  width: ${({width}) => width};
  border: 0;
  border-radius: 5px;
  background-color: ${({bgColor}) => bgColor};
  color: ${({txtColor}) => txtColor};
  outline: 0;
  margin-bottom: 10px;
  margin-top: 5px;
  
  &:nth-child(4){
    margin-right: 2%;
  }

  &:last-child {
    margin-bottom: 0;
    margin-top: 20px;
  }

  &[type="checkbox"]{
    position: absolute;
  }

  &[type="submit"]{
    cursor: pointer;
  }

  &[type="submit"]:hover, &[type="submit"]:active{
    background-color: #156fc9
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
  background-color: #F0F0F0;
  outline: 0;
  margin-bottom: 10px;
  margin-top: 5px;
  resize: none;

  &:last-child {
    margin-bottom: 0;
    margin-top: 10px;
  }
`

const Hr = styled.hr`
  outline: 0;
  border: 0;
  background-color: #cecece;
  height: 1px;
  margin-bottom: 10px;
`


export default function HeroContainer() {
  return (
    <React.Fragment>
      <HeroBanner>
        <HeroRow>
          <HeroTextContainer>
            <h1>Reparación e instalación de parquet y tarima</h1>
            <p>
              Hogar Soluciones cuenta con profesionales en parquet y tarima en
              mantenimiento, reparaciones de alta cualificación, disponibles en
              tu área geográfica y seleccionadas por Grupo Inter Partner
              Assistance.
            </p>
            <p>Toda instalación o reparación tiene 6 meses de
              garantía y cuenta con una cobertura de Responsabilidad Civil que
              garantiza la protección de la casa, piso, local o vivienda ante
              cualquier desperfecto o inconveniente que pudieran necesitar la
              intervención de profesionales en reparaciones de parquet y tarima.
              </p>
          </HeroTextContainer>
          <HeroForm>
            <Header>Cotiza Gratis</Header>
            <Input width="100%" type="text" bgColor="#f0f0f0" txtColor="#000" placeholder="Direccion" required />
            <Input width="100%" type="text" bgColor="#f0f0f0" txtColor="#000" placeholder="Direccion" required />
            <Input width="38%" type="text" bgColor="#f0f0f0" txtColor="#000" placeholder="Codigo Postal" required />
            <Input width="60%" type="text" bgColor="#f0f0f0" txtColor="#000" placeholder="Telefono" required />
            <Input width="100%" type="email" bgColor="#f0f0f0" txtColor="#000" placeholder="Correo Electronico" required />
            <Description placeholder="Describenos que reparacion o reforma necesitas realizar" required />
            <Hr />
            <label>Adjunta una Foto o un Plano:</label>
            <Input width="100%" type="file" bgColor="#f0f0f0" txtColor="#000" />
            <label htmlFor="checkUrgence">Urgente: </label>
            <Input width="auto" id="checkUrgence" type="checkbox" bgColor="dodgerblue" txtColor="#FFF" />
            <Input width="100%" type="submit" bgColor="dodgerblue" txtColor="#FFF" />
          </HeroForm>
        </HeroRow>
      </HeroBanner>
    </React.Fragment>
  );
}
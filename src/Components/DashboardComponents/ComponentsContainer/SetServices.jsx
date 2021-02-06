import React, { useState } from "react";
import styled from "styled-components";

export default function SetServices() {
  const [banner, setBanner] = useState(null);

  async function changeBanner(e) {
    let file = await e.target.files[0];

    file !== undefined ? setBanner(URL.createObjectURL(file)) : setBanner("");
  }

  return (
    <>
      <FormContainer>
        <Preview>
          <img src={banner} alt="" />
        </Preview>
        <Form>
          <h1>Agregar Servicio</h1>
          <p>
            Aqui puedes agregar un servicio seleccionando el icono, titulo,
            descripcion y el texto que se usara para rellenar de forma
            automatica el formulario de tus clientes.
          </p>
          <input
            type="file"
            name="myImage"
            onChange={changeBanner}
            accept="image/*"
          />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Titulo"
            autoComplete="off"
          />
          <textarea
            type="text"
            name="text"
            id="text"
            placeholder="Descripcion de tu servicio aqui"
            autoComplete="off"
          />
          <textarea
            type="text"
            name="textAuto"
            id="textAuto"
            placeholder="Texto de autocompletado"
            autoComplete="off"
          />
        </Form>
      </FormContainer>

      <CardContainer>
        <h1>Lista de Servicios</h1>
        <p>Clic en una para editar o doble clic para eliminar</p>
        <Card>
          <Icon src="https://res.cloudinary.com/superfolio/image/upload/v1608151891/homesol/roller-paint_idwmu5.svg" />
          <h1>Titulo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            maiores non at nisi quasi. Ratione reprehenderit exercitationem
            itaque amet possimus ut repellendus, eum facilis enim sequi,
            veritatis sit totam at.
          </p>
        </Card>
        <Card>
          <Icon src="https://res.cloudinary.com/superfolio/image/upload/v1608151891/homesol/roller-paint_idwmu5.svg" />
          <h1>Titulo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            maiores non at nisi quasi. Ratione reprehenderit exercitationem
            itaque amet possimus ut repellendus, eum facilis enim sequi,
            veritatis sit totam at.
          </p>
        </Card>
        <Card>
          <Icon src="https://res.cloudinary.com/superfolio/image/upload/v1608151891/homesol/roller-paint_idwmu5.svg" />
          <h1>Titulo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            maiores non at nisi quasi. Ratione reprehenderit exercitationem
            itaque amet possimus ut repellendus, eum facilis enim sequi,
            veritatis sit totam at.
          </p>
        </Card>
        <Card>
          <Icon src="https://res.cloudinary.com/superfolio/image/upload/v1608151891/homesol/roller-paint_idwmu5.svg" />
          <h1>Titulo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            maiores non at nisi quasi. Ratione reprehenderit exercitationem
            itaque amet possimus ut repellendus, eum facilis enim sequi,
            veritatis sit totam at.
          </p>
        </Card>
        <Card>
          <Icon src="https://res.cloudinary.com/superfolio/image/upload/v1608151891/homesol/roller-paint_idwmu5.svg" />
          <h1>Titulo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            maiores non at nisi quasi. Ratione reprehenderit exercitationem
            itaque amet possimus ut repellendus, eum facilis enim sequi,
            veritatis sit totam at.
          </p>
        </Card>
      </CardContainer>
    </>
  );
}

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  min-width: 280px;
  width: 100%;
  max-width: 1144px;
  height: 100%;
  max-height: 600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row wrap;
  box-sizing: border-box;
  padding: 1rem;

  @media only screen and (max-width: 1155px) {
    height: auto;
    max-height: 100%;
    border-radius: 0px;
  }
`;

const Form = styled.form`
  box-sizing: border-box;
  min-width: 310px;
  max-width: 500px;

  & input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    resize: none;
    padding: 10px;
    color: #000;
    background-color: #fff;
    border: 0;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  & textarea {
    min-height: 120px;
  }

  @media only screen and (max-width: 1155px) {
    min-width: 100px;
    width: 100%;
    max-width: 800px;
    margin: 10px;
  }
`;

const Preview = styled.div`
  background-color: #21212c;
  width: 50%;
  height: calc(100% - 100px);
  border-radius: 10px;
  overflow: hidden;
  padding: 0;
  margin: 10px;

  img {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    object-fit: cover;
  }

  @media only screen and (max-width: 1155px) {
    min-width: 100px;
    width: 100%;
    max-width: 800px;
    height: 500px;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 768px) {
    height: 300px;
  }
`;

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  min-width: 280px;
  width: 100%;
  max-width: 1144px;
  height: 100%;
  max-height: 600px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-flow: row wrap;
  box-sizing: border-box;
  padding: 1rem;
  overflow-y: scroll;
  margin-top: 1rem;

  & > h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 0;
  }

  & > p {
    width: 100%;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 1155px) {
    height: auto;
    max-height: 100%;
    border-radius: 0px;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  min-width: 225px;
  box-sizing: border-box;
  margin: 10px;
  padding: 2rem 1rem;
  border-radius: 5px;
  flex: 29%;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  max-width: 351px;

  &:active {
    transform: scale(0.975);
  }

  & h1 {
    width: 100%;
    margin-top: 2rem;
    font-weight: 400;
    margin-bottom: 0;
    font-size: 26px;
  }

  & p {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 18px;
  }

  span {
    margin-right: 10px;
    margin-top: 0%;
    font-size: 12px;
  }
`;

const Icon = styled.img`
  height: 100px;
  object-fit: cover;
`;

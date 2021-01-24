import React, { useState } from "react";
import styled from "styled-components";

export default function SetViewHero() {
  const [banner, setBanner] = useState(null);

  async function changeBanner(e) {
    let file = await e.target.files[0];

    file !== undefined ? setBanner(URL.createObjectURL(file)) : setBanner("");
  }

  return (
    <FormContainer>
      <Preview>
        <img src={banner} alt="" />
      </Preview>
      <Form>
        <h1>Ajustes del Encabezado</h1>
        <p>
          Aqui puedes cambiar el fondo, titulo y texto del encabezado de tu
          pagina.
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
          name="textHero"
          id="textHero"
          placeholder="Texto de presentacion"
          autoComplete="off"
        />
      </Form>
    </FormContainer>
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
  min-height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row wrap;
  box-sizing: border-box;
  padding: 1rem;
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
    min-height: 200px;
  }

  

  @media only screen and (max-width: 1155px){
    min-width: 100px;
    width: 100%;
    max-width: 800px;
    margin: 10px;
  }

`;

const Preview = styled.div`
  background-color: #21212c;
  width: 50%;
  height: calc(100vh - 200px);
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

@media only screen and (max-width: 1155px){
  min-width: 100px;
  width: 100%;
  max-width: 800px;
  height: 500px;
  margin-top: 2rem;
}

@media only screen and (max-width: 768px){
  height: 300px;
}

`;

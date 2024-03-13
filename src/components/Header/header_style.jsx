/** @format */

// Depois da instalação do styled-components, fazer o import
import styled, { createGlobalStyle } from "styled-components";

// Reset da pagina (esse reset esta dentro do app)
export const GlobalStyle = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing:border-box;
     font-family: sans-serif;
 }

`;

//estilo da Header
export const Header = styled.header`
  /* border: solid 2px red; */
  display: flex;
  justify-content: space-between;

  div {
    /* border: solid 2px; */
    display: flex;
  }

  section {
    display: flex;
  }

  .mequi {
    background-color: yellow;
  }
`;

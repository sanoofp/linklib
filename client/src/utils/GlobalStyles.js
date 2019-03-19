import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.primaryFont}
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.black1};
  }

  button {
    outline: none;
    &:active,&:hover,&:focus {
      outline: none;
    }
  }
`;

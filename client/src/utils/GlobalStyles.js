import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.primaryFont}
    background-color: ${props => props.theme.bodybg};
    color: ${props => props.theme.font};
  }

  button {
    outline: none;
    &:active,&:hover,&:focus {
      outline: none;
    }
  }

  a {
    color: #fff;
    &:hover {
      text-decoration: none;
    }
  }
`;

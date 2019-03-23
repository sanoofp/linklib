import { createGlobalStyle } from "styled-components";

const utils = `
  .h-100{ 
    height: 100% !important;
  }
`

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.primaryFont};
    background-color: ${props => props.theme.bodybg};
    color: ${props => props.theme.font};
    transition: background-color 0.3s ease;
  }

  button, div[role="button"] {
    outline: none;
    &:active,&:hover,&:focus {
      outline: none;
    }
  }
  
  div[tabindex="1"] {
    outline: none;
  }

  a {
    color: #fff;
    &:hover, &:active {
      color: #fff;
      text-decoration: none;
    }
  }

  ${utils}

  @media (max-width: 485px) {
    .dialog-paper--fix {
      margin: 12px !important;
    }
  }
`;

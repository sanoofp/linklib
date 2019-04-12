import { createGlobalStyle } from "styled-components";
import { modifyColor } from "../functions/helper";

const utils = `
  .h-100{ 
    height: 100% !important;
  }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: ${props => props.theme.primaryFont};
    background-color: ${props => props.theme.bodybg};
    color: ${props => props.theme.font};
    line-height: 1.5;
    overflow-x: hidden;
  }

  button, div[role="button"], div[role="document"] {
    outline: none;
    &:active,&:hover,&:focus {
      outline: none;
    }
  }
  
  div[tabindex="1"] {
    outline: none;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    &:hover, &:active {
      color: #fff;
      text-decoration: none;
    }
  }

  ::selection {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.font};
  }

  ${utils}

  @media (max-width: 485px) {
    .dialog-paper--fix {
      margin: 12px !important;
    }
  }
`;

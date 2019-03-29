import styled from "styled-components";
import { modifyColor } from "../../functions/helper";

export const LinkBoxContainer = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 16px 0px;
  padding: 14px 12px;
  background-color: ${props => modifyColor(props.theme.bodybg, 9)};
  color: ${props => props.theme.font};
  transition: all 0.12s ease-in-out;
  h3 {
    margin: 0px 0;
  }
  button[aria-label="SpeedDial"] {
    margin: 15px 12px;

  }
  p {
    word-wrap: break-word;
    font-size: 0.7em;
    margin: 0;
    padding: 4px 0;
  }
  a {
    margin-top: 5px;
    color: ${props => props.theme.font};
    &:active,
    &:focus,
    &:hover {
      color: ${props => props.theme.font};
      text-decoration: none;
    }
  }

  input[type="text"] {
    padding: 12px 0px;
    box-sizing: border-box;
    font-size: 0.8em;
    // word-wrap: break-word;
    word-wrap: break-word;
    word-break: break-all;
    width: inherit;
    max-height: 110px;
    background-color: ${props => props.theme.bodybg};
    color: ${props => props.theme.font};
    border: none;
    font-family: ${props => props.theme.primaryFont};
    &:active, &:focus, &:hover {
      outline: none;
      border: none;
    }
  }

  &:hover {
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
  }

  .dashboard--links-action {
    padding: 5px 0px;
    .dashboard-btns {
      padding: 8px 0px;
    }
  }
  
  @media (max-width: 485px) {
    h3 {
      strong {
        font-size: 0.56em;
      }
    }
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.bodybgdark};
  margin: 12px 0px;
  border-radius: 12px;
  padding: 12px 0px;
  // box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
`;

export const Card = styled.div`
  margin: 18px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  background-color: ${props => props.theme.bodybgdark};
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
  padding: 12px 0px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  }
  h3 {
    margin-top: 5px;
    margin-bottom: 1px;
  }
  p {
    margin: 0;
    font-size: 0.8em;
    color: #666;
  }
  fieldset {
    border-radius: 10px;
  }
  label {
    font-family: ${props => props.theme.primaryFont} !important;
  }
  input {
    color: ${props => props.theme.font} !important;
    margin: 4px 0;
  }
  form {
    width: 100%;
  }
`;

export const ScrollFixTarget = styled.div`
  width: auto;
  position: ${props => props.cardPositionFixed ? "fixed" : "relative"};
  top: ${props => props.cardPositionFixed ? "2px" : ""};
  margin-right: ${props => props.cardPositionFixed ? "40px" : "0"};
`;

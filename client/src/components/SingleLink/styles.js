import styled from "styled-components";
import { modifyColor } from "../../functions/helper";

const dFlexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CopiedMsg = styled.div`
  width: 200px;
  position: fixed;
  top: 34%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 23px;
  box-shadow: 0px 4px 18px rgba(0,0,0,0.1);
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  background-color: ${props => props.theme.bodybg};
  p { margin : 0; }
  ${props => props.copied ? `
    opacity: 1;
    z-index: 2;
    
  ` : `
    opacity: 0;
    z-index: -1;
    
  ` }
`;

export const ShareContainer = styled.div`
  width: 100%;
  margin: 12px auto;
  text-align: center;
`;

export const Icons = styled.div`
  max-width: 400px;
  margin: 6px auto;
  ${dFlexCenter}
  font-size: 0.74em !important;
  svg {
    color: ${props => props.theme.font};
    margin: 0 6px;
    padding: 14px;
    box-sizing: content-box;
  
  }
`;

export const SingleLinkContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 16px;
  &:nth-of-type(2) {
    margin: 34px 0;
  }
  padding: 18px 22px;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.16);
  ${dFlexCenter}
  flex-direction: column;
  border-radius: 12px;
  background-color: ${props => modifyColor(props.theme.bodybg, 20)};
  color: ${props => props.theme.font};
  text-align: center;
  overflow: hidden;
  h1 {
    font-family: ${props => props.theme.secondaryFont};
    font-size: 2.5em;
    margin-bottom: 5px;
  }
  h2 {
    font-size: 0.7em;
    font-family: ${props => props.theme.secondaryFont};    
    text-transform: uppercase;   
  }
  input[type="text"] {
    position: relative;
    margin-bottom: 25px;
    padding: 6px 10px;
    font-size: 0.8em;
    width: 280px;
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
  
  .links-btn {
    font-size: 0.9em;
    padding: 9px 24px;
    margin: 0 8px;
    color: ${props => props.theme.font};
    font-family: ${props => props.theme.primaryFont};
    border: 1px solid ${props => props.theme.font};
    border-radius: 8px;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${props => props.theme.bodybg};
      background-color: ${props => props.theme.font};
    }
  }
  .details {
    padding: 14px 0px;
    span {
      font-size: 0.87em;
    }
  }
  .actions {
    p {
      font-size: 0.7em;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.4em;
    }
  }
  
`;
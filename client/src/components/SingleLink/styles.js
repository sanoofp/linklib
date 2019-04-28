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
  padding: 60px 22px;
  box-shadow: 0px 3px 10px rgba(0,0,0,0.14);
  ${dFlexCenter}
  flex-direction: column;
  border-radius: 12px;
  background-color: ${props => modifyColor(props.theme.bodybg, 20)};
  color: ${props => props.theme.font};
  text-align: center;
  overflow: hidden;
  &:nth-of-type(2) {
    padding: 30px 22px;
    margin: 34px 0;
  }
  h1 {
    font-family: ${props => props.theme.secondaryFont};
    font-size: 2.15em;
    margin: 5px 0px;
  }
  h2 {
    font-size: 0.7em;
    font-family: ${props => props.theme.secondaryFont};    
    text-transform: uppercase;   
  }
  a {
    color: ${props => props.theme.font};
  }
  input[type="text"] {
    position: relative;
    margin-bottom: 16px;
    padding: 6px 10px;
    font-size: 0.8em;
    width: 360px;
    max-height: 110px;
    text-align: center;
    background-color: ${props => props.theme.bodybg};
    color: ${props => props.theme.font};
    border: none;
    font-family: ${props => props.theme.primaryFont};
    &:active, &:focus, &:hover {
      outline: none;
      border: none;
    }
  }

  .link-btn {
    border-radius: 6px;
    margin: 3px 6px;
  }
  
  .details {
    padding: 4px 0 14px 0;
    span {
      display: block;
      font-size: 0.87em;
    }
    blockquote {
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
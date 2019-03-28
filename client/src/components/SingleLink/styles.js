import styled from "styled-components";
import { modifyColor } from "../../functions/helper";

const dFlexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ShareContainer = styled.div`
  width: 100%;
  margin: 18px auto;
  text-align: center;
  h2 {
    font-size: 0.7em;
    font-family: ${props => props.theme.secondaryFont};    
  }
`;

export const Icons = styled.div`
  max-width: 400px;
  margin: 12px auto;
  ${dFlexCenter}
  color: ${props => props.theme.font};
  font-size: 0.74em !important;
  svg {
    margin: 0 6px;
    border: 1px solid ${props => props.theme.font};
    padding: 14px;
    box-sizing: content-box;
    border-radius: 50%;
  }
`;

export const SingleLinkContainer = styled.div`
  width: 100%;
  padding: 18px 22px;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.16);
  ${dFlexCenter}
  flex-direction: column;
  border-radius: 12px;
  background-color: ${props => modifyColor(props.theme.bodybg, 20)};
  color: ${props => props.theme.font};
  text-align: center;
  h1 {
    font-family: ${props => props.theme.secondaryFont};
    font-size: 2.5em;
    margin-bottom: 5px;
  }
  p {
    text-align: center;
    margin-bottom: 30px;
    width: 100%;
    font-size: 0.7em;
    word-wrap: break-word;
  }
  a, input {
    font-size: 0.9em;
    color: ${props => props.theme.font};
    padding: 9px 24px;
    margin: 0 8px;
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
  @media (max-width: 580px) {
    h1 {
      font-size: 1.7em;
    }
  }
`;
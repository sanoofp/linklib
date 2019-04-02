import styled from "styled-components";
import { modifyColor } from "../../functions/helper";

export const DashboardContainer = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 40px;
  .show-items-container {
    margin-top: 80px;
  }
  
  
  @media (max-width: 768px) {
    .show-items-container {
      margin-top: 100px;
    }
  }
  
  @media (max-width: 485px) {
    .show-items-container {
      margin-top: 80px;
    }
  }  
`;
  
export const SearchContainerForm = styled.div`
  box-shadow: 0px 3px 16px rgba(0,0,0,0.1);
  position: ${props => props.cardPositionFixed ? "fixed" : "absolute"};
  top: ${props => props.cardPositionFixed ? 0 : props.headerHeight};
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: ${props => modifyColor(props.theme.bodybg, 16)};
  padding: 8px 0;
  margin-top: ${props => props.cardPositionFixed ? "0px" : "6px"};
  border-radius: 12px;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  input {
    width: 340px;
  }
  label {
    font-family: ${props => props.theme.primaryFont} !important;
  }
  fieldset {
    margin-right: 8px !important; 
  }
  
  @media (max-width: 485px) {
    padding: 6px 0;
    justify-content: center;
    
    input {
      margin: 0 8px;
      width: 160px;
    }
    button {
      margin: 0;
    }
  }
`;


export const ShowLinkItem = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${props => modifyColor(props.theme.bodybg, 16)};
  border-radius: 12px;
  margin: 30px 0;
  padding: 28px 18px;
  position: relative;

  h4 {
    font-size: 1.4em;
    margin: 0;
  }
  p {
    font-size: 0.8em;
    margin: 8px 0 6px 0 !important;
    word-wrap: break-word;
    margin: 0;
  }
  .show-link-item-btn {
    button {
      margin: 8px 0 0 0;
    }
  }
  .more-show-link-item {
    position: absolute;
    top: 14px;
    right: 9px;
  }
`;

export const AddLinkMessageContainer = styled.div`
  max-width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 4px 5px 24px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: ${props => props.theme.bodybg};
  text-align: center;
  padding: 30px 18px;
  h4 {
    font-size: 1.8em;
    margin: 0;
    font-family: ${props => props.theme.primaryFont};
  }
  h6 {
    margin: 4px 0;
    word-wrap: break-word;
  }
  p {
    font-size: 1.2em;
    margin: 8px 0;
  }

  div {
    margin-top: 12px;
  }

  @media (max-width: 820px) {
    width: 94%;
  }
`;
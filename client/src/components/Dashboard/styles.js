import styled from "styled-components";
import { modifyColor } from "../../functions/helper";

export const DashboardContainer = styled.div`
  width: 100%;
  position: relative;
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
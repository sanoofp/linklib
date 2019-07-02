import styled from "styled-components";
import { modifyColor } from "../../functions/helper";

export const DashboardContainer = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 100px;
  .show-items-container {
    // margin-top: 80px;
    .no-result {
      padding: 20px 0;
      text-align: center;
    }
    .is-searching {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      margin-top: 30px;
      padding: 8px 12px;
      p {
        strong {
          font-family: ${props => props.theme.secondaryFont};
        }
        margin: 0;
      }
      small {
        font-size: 0.6em;
      }
    }
  }

  @media (max-width: 485px) {
    .show-items-container {
      margin-top: 10px;
    }
  }
`;

export const SearchContainerForm = styled.div`
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 2;
  background-color: ${props => modifyColor(props.theme.bodybg, 16)};
  padding: 9px 0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;

  .select {
    margin-right: 12px;
    margin-left: 12px;
    min-width: 100px;
  }

  input {
    width: 400px;
    color: ${props => props.theme.font};
  }
  label {
    font-family: ${props => props.theme.primaryFont} !important;
  }
  fieldset {
    border-radius: 10px;
    margin-right: 8px !important;
  }

  @media (max-width: 485px) {
    padding: 6px 0;
    justify-content: center;

    input {
      width: 240px;
    }
  }
`;

export const ShowLinkItem = styled.div`
  background-color: ${props => modifyColor(props.theme.bodybg, 16)};
  // border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  margin: 30px 0px !important;
  padding: 30px 18px !important;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h4 {
    font-size: 1.4em;
    margin: 0;
    width: 90%;
  }
  p {
    max-width: 80%;
    font-size: 0.8em;
    margin: 10px 0 9px 0 !important;
    word-wrap: break-word;
    margin: 0;
  }
  .private {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 14px 0 0;
    border-radius: 12px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.font};
    background-color: ${props => props.theme.primary};
    p {
      display: inline-block;
      margin-top: -25px;
    }
  }
  .show-link-item-btn {
    button {
      margin: 8px 0 0 0;
    }
  }

  .tag-container--show {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .tag--show {
      backgorund-color: ${props => props.theme.whiteAlpha};
      box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.11);
      border-radius: 12px;
      padding: 4px 12px;
      margin: 8px 9px;
    }
    small {
      font-size: 0.8em;
    }
  }

  .actions {
    margin-top: 10px;
    p {
      font-size: 0.7em;
      margin-left: 6px;
    }
  }

  @media (max-width: 485px) {
    padding: 44px 10px !important;
    margin: 20px 2px !important;
    p {
      font-size: 0.67em;
    }
  }
`;

export const AddLinkMessageContainer = styled.div`
  width: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 4px 5px 24px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: ${props => props.theme.bodybg};
  text-align: center;
  padding: 50px 26px;
  h4 {
    font-size: 1.8em;
    margin: 0;
    font-family: ${props => props.theme.primaryFont};
  }
  h6 {
    margin: 8px 0;
    word-wrap: break-word;
  }
  p {
    font-size: 1.2em;
    margin: 8px 0;
  }
  button {
    ${props =>
      props.theme.primary === "#212121" ? `color: ${props.theme.font}` : null}
  }

  div {
    margin-top: 12px;
  }

  @media (max-width: 820px) {
    width: 94%;
  }
`;

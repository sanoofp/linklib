import styled from "styled-components";

export const SpinnerContainer = styled.div`
  z-index: ${props => (props.reqLoading ? "1301" : "1097")};
  background-color: ${props =>
    props.reqLoading ? "rgba(0,0,0,0.5)" : props.theme.bodybg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

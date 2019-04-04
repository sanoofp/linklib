import styled from "styled-components";

export const SpinnerContainer = styled.div`
z-index: ${props => props.reqLoading ? "1301" : "1097"};
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.reqLoading ? "rgba(0,0,0,0.5)" : props.theme.bodybg};
`;

import styled from "styled-components";

export const SpinnerContainer = styled.div`
z-index: 1400;
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.5);
`;
export const SpinnerContainer2 = styled.div`
z-index: 140;
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.theme.bodybg};
`;


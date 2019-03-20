import styled from "styled-components";

const dflexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContainer = styled.div`
  // height: 90vh;
  padding: 70px 0px;
  ${dflexCenter}
`;
  
export const HomeIntro = styled.div`
  position: relative;
  overflow: hidden;

  @media (max-width: 996px) {
    margin-bottom: 20px;
  }
  @media (max-width: 580px) {
    margin-bottom: 40px;
    ${dflexCenter}
  }
`;

export const IntroText = styled.div`
  ${dflexCenter}
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-family: ${props => props.theme.secondaryFont}
    font-size: 5.1em;
    margin: 0;
  }
  p {
    font-size: 1.2em;
  }
`;

console.log(IntroText);
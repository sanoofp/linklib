import styled from "styled-components";

export const MuiButtonStyles = theme => ({
  btnSignUp: {
    padding: "14px 36px",
    borderRadius: 25
  },
  icon: {
    marginRight: 4,
    fontSize: 22
  }
});

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

export const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  button {
    margin: 8px 0px;
    &:nth-of-type(1) {
      margin-right: 14px;
    }
  }

  @media (max-width: 485px) {
    text-align: center;
    padding: 4px 10px;
    button {
      width: 100%;
      margin: 7px 0px;
      &:nth-of-type(1) {
        margin-right: 0;
      }
    }
  }
`;

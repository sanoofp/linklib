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
  width: 100%;
`;

export const Intro = styled.div`
  padding: 70px 0 160px 0;
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
    line-height: 1;
  }
  p {
    font-size: 1.2em;
  }
  @media (max-width: 580px) {
    h1 {
      font-size: 5em;      
    }
    p {
      font-size: 1.15em;
    }
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

export const GobalSearchContainer = styled.div`
  width: 100%;
  padding: 80px 0;
  position: relative;
  background-color: ${props => props.theme.primary};

  #curveUpColor path,
  #curveDownColor path {
    fill: ${props => props.theme.primary};
    stroke: ${props => props.theme.primary};
  }
  #curveUpColor {
    position: absolute;
    top: -80px;
  }
  #curveDownColor {
    position: absolute;
    bottom: -80px;
  }

  h3,
  p {
    margin: 0;
  }
  h3 {
    margin-bottom: 8px;
    font-size: 1.7em;
    font-family: ${props => props.theme.secondaryFont};
  }

  img.search-home-art {
    width: 100%;
    padding: 30px 22px 0 22px;
  }

  @media (max-width: 580px) {
    img.search-home-art {
      padding: 0 0;
      margin: 20px 0;
    }
  }
`;

export const ResultContainer = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  overflow: hidden;
  overflow-y: auto;
  box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  background: ${props => props.theme.bodybg};
  margin: 8px 0 0 0;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
    display: none;
  }

  .search-info {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      font-size: 1.1em;
      margin: 0;
    }
    p {
      margin: 10px 0;
    }
  }

  .show-more--btn {
    margin: 0 20px 40px 20px;
  }

  @media (max-width: 580px) {
    margin: 0;
  }
  `;
  
  export const ContributeContainer = styled.div`
  padding: 5.2em 0;
  text-align: center;
  h1{
    font-family: ${props => props.theme.secondaryFont};
    font-size: 2.3em;
  }
  span svg {
    margin-right: 12px;
  }
  img {
    width: 100%;
  }
  @media (max-width: 580px) {
    padding: 4em;
  }
`

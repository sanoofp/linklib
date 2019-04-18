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
  padding: 60px 0;
  background-color: ${props => props.theme.primary};
  position: relative;
  &:after {
    position: absolute;
    content: "";
    top: -50px;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.primary};
    border-radius: 150% 150% 0 0;
  }
  h2, p {
    margin: 0;
  }
  h2 {
    margin-bottom: 8px;
    font-size: 1.7em;
    font-family: ${props => props.theme.secondaryFont};
  }
  
  .search-box {
    position: relative;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    margin: 0 12px;
    background: ${props => props.theme.bodybg};
    outline: none;
    border: none;
    box-shadow: 2px 4px 18px rgba(0,0,0,0.25);
    border-radius: 12px;
    padding: 24px 18px;
    font-size: 1.1em;
    color: ${props => props.theme.font};
    font-family: ${props => props.theme.primaryFont};
  }
  @media (max-width: 580px) {
    input {
      margin: 20px 0;
    }
  }
`;

export const ResultContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 340px;
  position: relative;
  overflow-y: scroll;
  box-shadow: 2px 4px 18px rgba(0,0,0,0.25);
  border-radius: 12px;
  background: ${props => props.theme.bodybg};  
  margin: 8px 12px 0 12px;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  .result-item {
    padding: 18px 24px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  
    h2 {
      font-size: 1.05em;
      word-break: break-all;
    }
    p {
      font-size: 0.7em;
      margin: 10px 0 4px 0;
    }
    small {
      font-size: 0.7em;
    }
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
  .search-loader {
    position: absolute;    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.3);
  }
  img {
    width: 200px;
  }

  @media (max-width: 580px) {
    margin: 0;
    button {
      margin-top: 14px;
    }
    .result-item {
      width: 100%;
      padding: 30px 12px;
      background-color: rgba(233,233,233,0.3);
      // text-align: center;
      // flex-direction: column;
      // justify-content: center;
    }
  }
`;
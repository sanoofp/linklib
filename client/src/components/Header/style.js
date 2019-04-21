import styled from 'styled-components';

export const StyledHeader = styled.div`
  padding: 22px 0px;
  width: 100%;
  z-index: 1098;
  position: relative;
  background-color: ${props => props.theme.primary};
  @media (max-width: 485px) {
    padding: 18px 0;
  }
`;

export const Logo = styled.div`
  font-size: 1.8em;
  font-family: ${props => props.theme.secondaryFont}
  color: ${props => props.color};
  h1 {
    position: relative;
    line-height: 48px;
    font-size: 40px;
    margin: 0;
  }
  small {
    position: absolute;
    top: -22px;
    right: -38px;
    font-size: 0.4em;
  }
`;

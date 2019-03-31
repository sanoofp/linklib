import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Menu from "@material-ui/icons/Menu";
import styled from "styled-components";
import { colors } from "../../utils/Theme";

const StyledHeader = styled.div`
  padding: 22px 0px;
  width: 100%;
  z-index: 141;
  position: relative;
  background-color: ${props => props.theme.primary};
  @media (max-width: 485px) {
    padding: 18px 0;
    
  }
`;

const Logo = styled.div`
  font-size: 1.8em;
  font-family: ${props => props.theme.secondaryFont}
  color: ${props => props.color};
  h1 {
    line-height: 48px;
    font-size: 40px;
    margin: 0;
  }
  
`;

const Header = props => {
  return (
    <StyledHeader id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-between">
            <Logo color={colors.white}>
              <h1>
                <Link to="/">Linklib</Link>
              </h1>
            </Logo>
            <div className="header--floating-btn">
              <Fab color="primary" aria-label="Menu" onClick={props.onBtnClick}>
                <Menu style={{ color: colors.white }} />
              </Fab>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

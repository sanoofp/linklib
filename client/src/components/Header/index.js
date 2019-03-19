import React from "react";
import Fab from "@material-ui/core/Fab";
import Menu from "@material-ui/icons/Menu";
import styled from "styled-components";
import { main } from "../../utils/Theme";

const StyledHeader = styled.div`
  padding: 22px 0px;
  width: 100%;
  background-color: ${props => props.theme.primary};
`;

const Logo = styled.div`
  font-size: 2em;
  color: ${props => props.theme.white};
`;

const Header = props => {
  return (
    <StyledHeader>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-between">
            <Logo color={main.white}>
              <h1>Linklib</h1>
            </Logo>
            <div className="header--floating-btn">
              <Fab color="primary" aria-label="Menu" onClick={props.onBtnClick}>
                <Menu style={{ color: main.white }} />
              </Fab>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

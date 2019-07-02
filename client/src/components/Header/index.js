import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Menu from "@material-ui/icons/Menu";
import { StyledHeader, Logo } from "./style";
import { colors } from "../../utils/Theme";

const Header = props => {
  return (
    <StyledHeader id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-between">
            <Logo color={colors.white}>
              <h1>
                <Link to="/">
                  Linklib<small>beta</small>
                </Link>
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

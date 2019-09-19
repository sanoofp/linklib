import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import A from "../Button/A";

const FooterContainer = styled.div`
  background-color: ${props => props.theme.primary};
  padding: 1.4em 0;
  border-top-right-radius: 40% 40%;
  border-top-left-radius: 20% 40%;
  color: ${props => props.theme.bodybg};
  h1 {
    font-family: ${props => props.theme.secondaryFont};
    font-size: 1.4em;
  }
  p {
    font-size: 0.7em;
  }
  .links {
    display: flex;
    justify-content: center
    flex-direction: column;
    a {
      font-size: 0.9em;
    }
  }
  .margin {
    width: 100%;
    margin: 12px 0;
  }
  @media (max-width: 485px) {
    border-top-right-radius: 40% 10%;
    border-top-left-radius: 20% 10%;
  }
`

export default function(props) {
  return <FooterContainer>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h1>Linklib</h1>
        <p>
          Build with ♥ from <A href="https://github.com/sanoofp">@sanoofp</A>.
        </p>
      </div>
      <div className="col-md-4 links">
        <A href="https://github.com/sanoofp/linklib">Contribute to this Project</A>
        <A href="https://github.com/sanoofp/linklib/issues/new">Report a Bug</A>
      </div>
      <div className="col-md-4 links">
        <Link to="/privacypolicy">Privacy and Policy</Link>
        <Link to="/termsandconditions">Terms and Conditions</Link>
      </div>
    </div>
  </div>
  </FooterContainer>
}

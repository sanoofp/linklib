import React from "react";
import styled from "styled-components";

const NotFoundDiv = styled.div`
  width: 100%;
  padding: 60px 0;
  text-align: center;
  h1 {
    font-size: 4em;
    font-family: ${props => props.theme.secondaryFont};
    margin: 0 0 10px 0;
  }
  p {
    margin: 0;
    font-size: 1.3em;
  }
`;

const PageNotFound = props => (
  <NotFoundDiv>
    <h1>404</h1>
    <p>Page not found</p>
  </NotFoundDiv>
);

export default PageNotFound;

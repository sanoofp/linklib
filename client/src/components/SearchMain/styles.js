import styled from "styled-components";

export const SearchMainContainer = styled.div`
  text-align: center;
  h1 {
    font-size: 2.5em;
  }
  .no-result {
    font-size: 1.3em;
    margin: 20px 0;
  }
  @media (max-width: 580px) {
    input {
      margin: 6px 0;
    }
    h1{
      font-size: 1.4em;
    }
  }
`
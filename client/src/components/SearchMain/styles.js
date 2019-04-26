import styled from "styled-components";

export const SearchMainContainer = styled.div`
  .no-result {
    margin: 20px 0;
    text-align: center;
    width: 100%;
    p {
      font-size: 1.67em;
      margin: 5px 0;
    }
    img {
      margin: 12px 0;
      width: 50%;
    }
  }
  @media (max-width: 580px) {
    input {
      margin: 6px 0;
    }
    .no-result {
      img {
        width: 100%;
      }
    }
  }
`
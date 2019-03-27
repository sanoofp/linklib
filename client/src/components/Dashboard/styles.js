import styled from "styled-components";

export const Card = styled.div`
margin: 18px auto;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
border-radius: 12px;
background-color: ${props => props.theme.bodybgdark};
box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
padding: 12px 0px
img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
}
h3 {
  margin-top: 5px;
  margin-bottom: 1px;
}
p {
  margin: 0;
  font-size: 0.8em;
  color: #666;
}
fieldset {
  border-radius: 10px;
}
input {
  color: ${props => props.theme.font} !important;
}
`;

import styled from "styled-components";
import { modifyColor } from '../../functions/helper';

export const LinkBoxContainer = styled.div`
  width: 100%;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 12px;
  margin: 8px 0px;
  background-color: ${props => modifyColor(props.theme.bodybg, 9)};
  padding: 8px 12px;
  color: ${props => props.theme.font};
  transition: all 0.25s ease-in-out;
  h3 {
    margin: 1px 0;
  }
  span {
    font-size: 0.6em;
  }
  a {
    color: ${props => props.theme.font};
    &:active, &:focus, &:hover{
      color: ${props => props.theme.font};
      text-decoration: none; 
    }
  }
  &:hover {
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);    
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.bodybgdark};  
  margin: 12px 0px;
  border-radius: 12px;
  padding: 12px 20px;
  // box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
`;

export const Card = styled.div`
margin: 18px auto;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
border-radius: 12px;
background-color: ${props => props.theme.bodybgdark};
// box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
padding: 12px 0px;
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
label {
  font-family: ${props => props.theme.primaryFont} !important;
}
input {
  color: ${props => props.theme.font} !important;
  margin: 4px 0;
}
form {
  width: 100%;
}
`;

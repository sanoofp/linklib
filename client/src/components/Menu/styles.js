import styled from "styled-components";

export const ShowLinkMenuItems = styled.div`
position: absolute;
top: 36px;
right: 12px;
p {
  margin: 0 !important;
}
small {
  display: block;
  margin-left: 6px;
  font-size: 0.6em;
}
@media (max-width: 485px) {
  right: 4px;
  top: 10px;
}
`;
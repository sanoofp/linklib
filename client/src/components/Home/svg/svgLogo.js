import styled from 'styled-components';

export const HomeCircle = styled.svg`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background-color: ${props => props.theme.primary};
  // background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23071d10' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%230d3a20' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%23145730' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%231a7541' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23219251' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%2327af61' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%232ecc71' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
`;
// export const HomeCircle = styled.svg`
//   width: 320px;
//   height: 320px;
//   border-radius: 50%;
//   background-color: ${props => props.theme.primary};
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%2327ad60' fill-opacity='0.6'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
// `;
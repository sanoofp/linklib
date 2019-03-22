import styled from 'styled-components';
import spacing from '@material-ui/core/styles/spacing';

const svg = `
  background-color: ${props => props.theme.bodybg};
  background-image: url("data:image/svg+xml,%3Csvg width='53' height='53' viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='bevel-circle' fill='${props => encodeURI(props.theme.primary)}' fill-opacity='0.8'%3E%3Cpath d='M10.414 29l-8 8h33.172l-8-8H10.414zM9 27.586l-8 8V2.414l8 8v17.172zM10.414 9l-8-8h33.172l-8 8H10.414zM29 10.414l8-8v33.172l-8-8V10.414zM11 11h16v16H11V11zm8 14c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM0 0h38v38H0V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

export const DialogContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: ${props => props.theme.bodybg};
  background-image: url("data:image/svg+xml,%3Csvg width='53' height='53' viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='bevel-circle' fill='${props => encodeURIComponent(props.theme.primary)}' fill-opacity='0.8'%3E%3Cpath d='M10.414 29l-8 8h33.172l-8-8H10.414zM9 27.586l-8 8V2.414l8 8v17.172zM10.414 9l-8-8h33.172l-8 8H10.414zM29 10.414l8-8v33.172l-8-8V10.414zM11 11h16v16H11V11zm8 14c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM0 0h38v38H0V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-color: ${props => props.bgcolor};
  // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%2315291b' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%231f4e2f' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23277544' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%232ca05a' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%232ecc71' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
  // // background-attachment: fixed;
  // background-size: cover;
  // background-position: center center;
`;

export const SignInFormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: ${props => props.bgcolor};
  background-color: ${props => props.bgcolor};
  color: ${props => props.color}
  padding: ${spacing.unit * 8}px ${spacing.unit * 4}px;
  label {
    font-family: ${props => props.theme.primaryFont}
  }
  h1 {
    // margin: 0;
    // padding: 0;
  }
`;
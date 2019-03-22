import React from 'react';
import { ModelContainerStyled, SignupModel, SignInForm } from "../style";
import TextField from '@material-ui/core/TextField';
import { SignupButtonComponent } from '../../Button';

const ModelContainer = prop => {
  return <ModelContainerStyled tabIndex={1}>
    <SignupModel>
      <div className="container">
        <div className="row">
          <SignInForm className="col-md-6 ml-auto">
            <h1 className="display-5">Create Account</h1>
            <TextField
              id="username-input"
              label="username"
              type="text"
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="email-input"
              label="email"
              type="email"
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              fullWidth
              variant="outlined"              
            />
            <SignupButtonComponent color="primary" variant="contained" fullWidth margin="30px 0 0 0" />
          </SignInForm>
        </div>
      </div>
    </SignupModel>
  </ModelContainerStyled>
}

export default ModelContainer;
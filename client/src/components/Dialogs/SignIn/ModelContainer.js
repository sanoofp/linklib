import React from "react";
import { ModelContainerStyled, SigninModel, SignInForm } from "../style";
import TextField from "@material-ui/core/TextField";
import { SigninButtonComponent } from "../../Button";

const ModelContainer = prop => {
  return (
    <ModelContainerStyled tabIndex={1}>
      <SigninModel>
        <div className="container">
          <div className="row">
            <SignInForm className="col-md-6 ml-auto">
              <h1 className="display-5">Signin</h1>
              <TextField
                id="username-input"
                label="username"
                type="text"
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
              <SigninButtonComponent fullWidth margin="30px 0 0 0" />
            </SignInForm>
          </div>
        </div>
      </SigninModel>
    </ModelContainerStyled>
  );
};

export default ModelContainer;

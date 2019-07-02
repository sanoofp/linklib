import React from "react";
import { ModelContainerStyled, SigninModel, Form } from "../style";
import TextField from "@material-ui/core/TextField";
import { SigninButtonComponent } from "../../Button";

const ModelContainer = props => {
  return (
    <ModelContainerStyled tabIndex={1}>
      <SigninModel>
        <div className="container h-100">
          <div className="row h-100">
            <Form className="col-md-6 ml-auto">
              <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
                <h1 className="display-5">Signin</h1>
                <TextField
                  id="username-input"
                  label="username"
                  type="text"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  onChange={event =>
                    props.onChange("username", event.target.value)
                  }
                />
                <TextField
                  id="password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  onChange={event =>
                    props.onChange("password", event.target.value)
                  }
                />
                <SigninButtonComponent
                  type="submit"
                  fullWidth
                  margin="30px 0 0 0"
                />
              </form>
            </Form>
          </div>
        </div>
      </SigninModel>
    </ModelContainerStyled>
  );
};

export default ModelContainer;

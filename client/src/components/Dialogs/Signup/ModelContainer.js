import React from "react";
import { ModelContainerStyled, SignupModel, Form } from "../style";
import TextField from "@material-ui/core/TextField";
import { SignupButtonComponent } from "../../Button";

const ModelContainer = props => {
  const { email, username, password } = props.emptyField;
  return (
    <ModelContainerStyled tabIndex={1}>
      <SignupModel>
        <div className="container h-100">
          <div className="row h-100">
            <Form className="col-md-6 ml-auto">
              <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
                <h1 className="display-5">Create Account</h1>
                <TextField
                  required
                  error={username ? username : false}
                  name="username"
                  label="Username"
                  type="text"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  onChange={event =>
                    props.onChange("username", event.target.value)
                  }
                />
                <TextField
                  required
                  error={email ? email : false}                  
                  name="email"
                  label="Email"
                  type="email"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  helperText="Used for verification of account"
                  onChange={event =>
                    props.onChange("email", event.target.value)
                  }
                />
                <TextField
                  required
                  error={password ? password : false}                           
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  helperText="Atleast 6 character"
                  onChange={event =>
                    props.onChange("password", event.target.value)
                  }
                />
                <SignupButtonComponent
                  color="primary"
                  variant="contained"
                  fullWidth
                  margin="30px 0 0 0"
                  type="submit"
                />
              </form>
            </Form>
          </div>
        </div>
      </SignupModel>
    </ModelContainerStyled>
  );
};

export default ModelContainer;

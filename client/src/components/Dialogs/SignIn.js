import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import { dialogAction } from '../../actions/appStateAction';
import { SigninButtonComponent } from '../Button';
import TextField from '@material-ui/core/TextField';
import {
  DialogContainer,
  SignInFormContainer,
} from './style';
import { colors } from '../../utils/Theme';

const SignIn = props => {
  const { signInDialogOpen } = props.appState;
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      // scroll="body"
      open={signInDialogOpen}
      onClose={() => props.dialogAction("signInDialogOpen", false)}
      aria-labelledby="signin"
      classes={{ paper: 'dialog-paper--fix' }}
    >
      <DialogContent style={{padding: 0}}>
      <DialogContainer >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-6 ml-auto p-0">
              <SignInFormContainer bgcolor={colors.white} color={colors.primaryDark}>
                <h1 className="display-5">Sign in</h1>
                <TextField
                  fullWidth
                  id="username"
                  label="username"
                  type="text"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  id="password"
                  label="password"
                  type="password"
                  margin="dense"
                  variant="outlined"                  
                />

                <SigninButtonComponent fullWidth margin="30px 0 20px 0" />

              </SignInFormContainer>
            </div>
          </div>
        </div>
      </DialogContainer>
      </DialogContent>
    </Dialog>
  );
};

SignIn.propTypes = {
  appState: PropTypes.object.isRequired,
  dialogAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  appState: state.appStateReducer
});

export default connect(mapStateToProps, { dialogAction })(withStyles()(SignIn));

import React from "react";
import Loadable from "react-loadable";
import Spinner from '../../Loader/Spinner';
import LoadableLoader from '../../Loader/LoadableLoader';
import LinearLoader from '../../Loader/LinearLoader'

const SnackbarComponent = Loadable({
  loader: () => import("../../Snackbar"),
  loading: LoadableLoader
});
const SignupModel = Loadable({
  loader: () => import("../../Dialogs/Signup/Signup"),
  loading: LoadableLoader
});
const SigninModel = Loadable({
  loader: () => import("../../Dialogs/SignIn/SignIn"),
  loading: LoadableLoader
});

const Utility = props => <div>
  <Spinner />
  <LinearLoader />
  <SnackbarComponent />
      
  <SigninModel />
  <SignupModel />
</div>

export default Utility;
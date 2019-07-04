import React from "react";
// import Loadable from "react-loadable";
import Spinner from "../../Loader/Spinner";
// import LoadableLoader from "../../Loader/LoadableLoader";
import LinearLoader from "../../Loader/LinearLoader";
import SnackbarComponent from "../../Snackbar";
import SignupModel from "../../Dialogs/Signup/Signup";
import SigninModel from "../../Dialogs/SignIn/SignIn";

// const SnackbarComponent = Loadable({
//   loader: () => import("../../Snackbar"),
//   loading: LoadableLoader
// });
// const SignupModel = Loadable({
//   loader: () => import("../../Dialogs/Signup/Signup"),
//   loading: LoadableLoader
// });
// const SigninModel = Loadable({
//   loader: () => import("../../Dialogs/SignIn/SignIn"),
//   loading: LoadableLoader
// });
// const EditLinkModel = Loadable({
//   loader: () => import("../../Dialogs/EditLink/EditLink"),
//   loading: LoadableLoader
// });

const Utility = props => (
  <div>
    <Spinner />
    <LinearLoader />
    <SnackbarComponent />

    <SigninModel />
    <SignupModel />
    {/* <EditLinkModel /> */}
  </div>
);

export default Utility;

import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { SpinnerContainer2 } from "./styles";

export default () => <SpinnerContainer2>
<CircularProgress size={40} thickness={8} color="primary" variant="indeterminate" />
</SpinnerContainer2>
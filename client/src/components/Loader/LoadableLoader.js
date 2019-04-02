import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { SpinnerContainer } from "./styles";

export default () => <SpinnerContainer>
<CircularProgress size={40} thickness={8} color="primary" variant="indeterminate" />
</SpinnerContainer>
import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { SpinnerContainer } from "./styles";

export default () => <SpinnerContainer>
<CircularProgress size={60} thickness={4} style={{color: "#2ECC71"}} color="primary" variant="indeterminate" />
</SpinnerContainer>
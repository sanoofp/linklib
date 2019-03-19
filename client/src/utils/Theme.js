import { createMuiTheme } from "@material-ui/core/styles";

export const main = {
  primary: "#2ECC71",
  white: "#ffffff",
  black1: "rgba(0,0,0,1)",
  black2: "rgba(0,0,0,0.8)",
  primaryFont: 'Raleway',
  secondaryFont: 'Montserrat'
};

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: main.primary
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Raleway", "sans-serif"].join(",")
  }
});

import { createMuiTheme } from "@material-ui/core/styles";

export const main = {
  primary: "#2ECC71",
  white: "#ffffff",
  black: "rgba(0,0,0,1)",
  primaryFont: "Raleway",
  secondaryFont: "Montserrat"
};

export const dark = {
  primary: "#263238",
  white: "#ffffff",
  black: "rgba(0,0,0,1)",
  primaryFont: "Raleway",
  secondaryFont: "Montserrat"
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

export const darkMuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: dark.primary
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Raleway", "sans-serif"].join(",")
  }
});

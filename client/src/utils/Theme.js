import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
  primaryGreen: "#2ECC71",
  primaryDark: "#212121",
  white: "#ffffff",
  whiteAlpha: "rgba(255,255,255,0.8)",
  black: "#000000",
  darkbg: "#111"
};

const fonts = {
  primaryFont: "Raleway",
  secondaryFont: "Montserrat"
};

export const main = {
  primary: colors.primaryGreen,
  font: colors.black,
  bodybg: colors.white,
  ...fonts
};

export const dark = {
  primary: colors.primaryDark,
  font: colors.whiteAlpha,
  bodybg: colors.darkbg,
  ...fonts
};

const commonMuiTheme = {
  typography: {
    useNextVariants: true,
    fontFamily: ["Montserrat", "sans-serif"].join(",")
  }
};

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: main.primary
    }
  },
  ...commonMuiTheme
});

export const darkMuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: dark.primary
    }
  },
  ...commonMuiTheme
});

import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
  primaryGreen: "#2ECC71", 
  primaryDark: "#263238",
  white: '#ffffff',
  black: '#000000',
  darkbg: '#212121'
}

const fonts = {
  primaryFont: "Raleway",
  secondaryFont: "Montserrat"
}

export const main = {
  primary: colors.primaryGreen,
  font: colors.black,
  bodybg: colors.white,
  ...fonts
};

export const dark = {
  primary: colors.primaryDark,
  font: colors.white,
  bodybg: colors.darkbg,
  ...fonts
};

const generalMuiTheme = {
  typography: {
    useNextVariants: true,
    fontFamily: ["Montserrat", "sans-serif"].join(",")
  }
}

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: main.primary
    }
  },
  ...generalMuiTheme
});

export const darkMuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: dark.primary
    }
  },
  ...generalMuiTheme
});

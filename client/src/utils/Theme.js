import { createMuiTheme } from "@material-ui/core/styles";
// import spacing from '@material-ui/core/styles/spacing';

export const colors = {
  primaryGreen: "#2ECC71",
  primaryDark: "#212121",
  white: "#ffffff",
  whiteAlpha: "rgba(255,255,255,0.8)",
  whiteAlpha5: "rgba(255,255,255,0.5)",
  black: "#000000",
  darkbg: "#111",
};

const fonts = {
  primaryFont: "Raleway",
  secondaryFont: "Montserrat"
};

export const main = {
  primary: colors.primaryGreen,
  secondary: colors.primaryDark,
  font: colors.black,
  bodybg: colors.white,
  ...fonts
};

export const dark = {
  primary: colors.primaryDark,
  secondary: colors.whiteAlpha,
  font: colors.whiteAlpha,
  bodybg: colors.darkbg,
  ...fonts
};

const commonMuiTheme = {
  typography: {
    useNextVariants: true,
    fontFamily: ["Montserrat", "sans-serif"].join(",")
  },
};

const muiOverrides = {

  buttonCommon: {
    MuiButton: {
      contained: {
        borderRadius: 25,
        padding: "14px 36px",
        color: '#fff',
        boxShadow: "none"
      },
      outlined: {
        borderRadius: 25,        
        padding: "14px 36px",        
      }
    }
  }
  
}

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: main.primary
    },
    secondary: {
      main: main.secondary,
    }
  },
  overrides: {
    ...muiOverrides.dialogCommon,
    ...muiOverrides.buttonCommon,
  },
  ...commonMuiTheme
});

export const darkMuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: dark.primary
    },
    secondary: {
      main: dark.secondary,
    }
  },
  overrides: {
    ...muiOverrides.dialogCommon,
    ...muiOverrides.buttonCommon,
    MuiDrawer: {
      paper: {
        backgroundColor: dark.primary,
      }
    },
    MuiListItemText: {
      primary: {
        color: dark.font
      }
    },
    MuiListItemIcon: {
      root: {
        color: dark.font
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: dark.bodybg
      }
    },
    MuiListSubheader: {
      root: {
        color: dark.font
      }
    },
  },
  ...commonMuiTheme
});

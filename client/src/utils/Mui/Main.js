import { createMuiTheme } from "@material-ui/core/styles";
import { main, dark } from "../Theme";

const commonMuiTheme = {
  typography: {
    useNextVariants: true,
    fontFamily: ["Montserrat", "sans-serif"].join(",")
  }
};

const muiOverrides = {
  buttonCommon: {
    MuiButton: {
      contained: {
        borderRadius: 25,
        padding: "14px 36px",
        color: "#fff",
        boxShadow: "none"
      },
      outlined: {
        borderRadius: 25,
        padding: "14px 36px"
      }
    }
  },
  textField: {
    MuiTextField: {
      marginNormal: {
        borderRadius: 8
      }
    }
  }
};

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: main.primary
    },
    secondary: {
      main: main.secondary
    }
  },
  overrides: {
    ...muiOverrides.buttonCommon
  },
  ...commonMuiTheme
});

export const darkMuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: dark.primary,
      type: "dark"
    },
    secondary: {
      main: dark.secondary
    }
  },
  overrides: {
    ...muiOverrides.buttonCommon,
    MuiDrawer: {
      paper: {
        backgroundColor: dark.primary
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
    }
  },
  ...commonMuiTheme
});

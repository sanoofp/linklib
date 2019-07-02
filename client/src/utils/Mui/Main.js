import { createMuiTheme } from "@material-ui/core/styles";
import { main, dark } from "../Theme";

const commonMuiTheme = {
  typography: {
    useNextVariants: true,
    fontFamily: ["Montserrat", "sans-serif"].join(",")
  }
};

const commonOverrides = {
  menu: {
    MuiMenu: {
      paper: {
        boxShadow: "0px 5px 19px rgba(0,0,0,0.2)",
        borderRadius: 12
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
      main: main.secondary,
      font: main.font
    }
  },
  overrides: {
    ...commonOverrides.menu
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
      main: dark.secondary,
      font: dark.font
    }
  },
  overrides: {
    ...commonOverrides.menu,
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
    },
    MuiInputLabel: {
      root: {
        color: dark.font,
        borderColor: dark.font
      }
    },
    MuiFormGroup: {
      root: {
        color: dark.font,
        borderColor: dark.font
      }
    },
    MuiFormControl: {
      marginNormal: {
        color: dark.font
      }
    },
    MuiIconButton: {
      root: {
        color: dark.font
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: dark.bodybg
      }
    },
    MuiMenuItem: {
      root: {
        color: dark.font
      }
    }
  },
  ...commonMuiTheme
});

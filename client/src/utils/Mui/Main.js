import { createMuiTheme } from "@material-ui/core/styles";
import { main, dark } from "../Theme";

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
    },
    secondary: {
      main: main.secondary,
      font: main.font,
    }
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
      font: dark.font,      
    }
  },
  overrides: {
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

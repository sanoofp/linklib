const fonts = {
  primaryFont: "Raleway",
  secondaryFont: "Montserrat"
};

export const colors = {
  primaryGreen: "#2ECC71",
  primaryDark: "#212121",
  white: "#ffffff",
  whiteAlpha: "rgba(255,255,255,0.7)",
  whiteAlpha5: "rgba(255,255,255,0.5)",
  black: "#111",
  darkbg: "#111",
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

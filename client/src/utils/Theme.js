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
  darkbg: "#121212",
  darkbg2: "#333"
};

export const main = {
  primary: colors.primaryGreen,
  secondary: colors.primaryDark,
  font: colors.black,
  bodybg: colors.white,
  bodybgdark: colors.white,
  ...fonts
};

export const dark = {
  primary: colors.primaryDark,
  secondary: colors.whiteAlpha,
  font: colors.whiteAlpha,
  bodybg: colors.darkbg,
  bodybgdark: colors.primaryDark,
  ...fonts
};

export const gradients = [
  { gradient: "linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)", shadow: "#0396FF" },
  { gradient: "linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)", shadow: "#7367F0" },
  { gradient: "linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)", shadow: "#28C76F" },
  { gradient: "linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%)", shadow: "#736EFE" },
  { gradient: "linear-gradient( 135deg, #F5CBFF 10%, #C346C2 100%)", shadow: "#C346C2" },
  { gradient: "linear-gradient( 135deg, #69FF97 10%, #00E4FF 100%)", shadow: "#00E4FF" },
  { gradient: "linear-gradient( 135deg, #FFE985 10%, #FA742B 100%)", shadow: "#FA742B" },
];

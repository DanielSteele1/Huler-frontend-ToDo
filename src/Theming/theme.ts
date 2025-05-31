const theme = {
  fonts: {
    primary: "Poppins, sans-serif",
  },
  colors: {
    primary: "#FB6664",
    grey1: "#413F49",
    grey2: "#1C1B22",
    grey3: "#807E84",
    grey4: "#101014",
    text: "#f2f2f2"
  },
  zLayers: {
    hidden: -999,
    behind: -1,
    default: 1,
    overlay: 10
  },
  breakpoints: {
    mobile: "450px",
    small: "750px",
    large: "1000px"
  },
  transitions: {
    default: "0.25s ease"
  }
};

export type ThemeType = typeof theme;

export default theme;

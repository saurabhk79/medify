// theme.js
import { ThemeOptions, createTheme } from "@mui/material/styles";

const themeOptions:ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#2aa7ff",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;

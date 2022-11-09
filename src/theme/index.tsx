import React from "react";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
  useTheme,
} from "@mui/material/styles";
import breakpoints from "./breakpoints";
import { CssBaseline } from "@mui/material";

const themeColors = {
  primary: "#000",
  secondary: "#fca404",
  success: "#54D62C",
  warning: "#FFC107",
  error: "#FF4842",
  background: "#ffffff",
  paper: "#ffffff",
  gray: "#808080",
};

function ThemeProvider({ children }) {
  const defaultTheme = useTheme();
  const selectedTheme = "light";

  const theme = createTheme({
    ...defaultTheme,
    breakpoints,
    shape: { borderRadius: 10 },
    palette: {
      mode: selectedTheme,
      background: {
        paper: themeColors.paper,
        default: themeColors.background,
      },
      primary: {
        main: themeColors.primary,
      },
      secondary: {
        main: themeColors.secondary,
      },
      success: {
        main: themeColors.success,
      },
      warning: {
        main: themeColors.warning,
      },
      error: {
        main: themeColors.error,
      },
      info: {
        main: themeColors.gray,
      },
    },
    typography: {
      fontFamily: "Montserrat",
      h6: {
        fontWeight: 500,
        fontSize: "0.75rem",
        color: themeColors.primary,
      },
      h5: {
        fontSize: "0.875rem",
        fontWeight: 500,
        color: themeColors.primary,
      },
      h4: {
        fontSize: "1rem",
        fontWeight: 600,
        color: themeColors.primary,
      },
      h3: {
        fontSize: "1.25rem",
        fontWeight: 600,
        color: themeColors.primary,
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: 700,
        color: themeColors.primary,
      },
      h1: {
        fontSize: "2.125rem",
        fontWeight: 700,
        color: themeColors.primary,
      },
      subtitle1: {
        fontSize: "0.875rem",
        fontWeight: 500,
        color: themeColors.primary,
      },
      subtitle2: {
        fontSize: "0.75rem",
        fontWeight: 400,
        color: themeColors.primary,
      },
      caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        color: themeColors.primary,
      },
      body1: {
        fontSize: "0.875rem",
        fontWeight: 400,
        color: themeColors.primary,
        lineHeight: "1.334em",
      },
      body2: {
        letterSpacing: "0em",
        fontWeight: 400,
        color: themeColors.primary,
        lineHeight: "1.5em",
      },
      button: {
        textTransform: "capitalize",
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

export default ThemeProvider;

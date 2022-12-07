import { createTheme, globalStyle, style } from "@vanilla-extract/css";

globalStyle("html, body", {
  padding: 0,
  margin: 0,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("*", {
  boxSizing: "border-box",
});

export const [themeClass, vars] = createTheme({
  color: {
    primary: "#C4B5FD",
  },
});

export const highlighted = style({
  color: vars.color.primary,
});

import { style } from "@vanilla-extract/css";

export const container = style({
  color: "#374151",
  fontSize: "3rem",
  fontWeight: 800,
  lineHeight: 1.5,

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "5rem",
    },
  },
});

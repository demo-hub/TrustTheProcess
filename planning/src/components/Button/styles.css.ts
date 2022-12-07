import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles/globals.css";

export const button = recipe({
  base: {
    display: "inline-flex",
    fontWeight: 700,
    alignItems: "center",
    borderRadius: "0.25rem",
  },

  variants: {
    type: {
      icon: {
        backgroundColor: "transparent",
        color: "#1F2937",
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        padding: "0.375rem 0.625rem",
      },
      danger: {
        backgroundColor: "#FCA5A5",
        color: "white",
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        padding: "0.375rem 0.625rem",
      },
      primary: {
        backgroundColor: vars.color.primary,
        color: "white",
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        padding: "0.375rem 0.625rem",
      },
      "no-fill": {
        backgroundColor: "transparent",
        color: vars.color.primary,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        paddingLeft: "0.625rem",
        paddingRight: "0.625rem",
      },
    },
  },

  defaultVariants: {
    type: "primary",
  },
});

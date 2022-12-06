import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  position: "fixed",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
});

export const modal = style({
  display: "flex",
  padding: "1.5rem",
  backgroundColor: "#ffffff",
  flexDirection: "column",
  width: "24rem",
  height: "24rem",
  borderRadius: "0.75rem",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
});

export const button = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const title = style({
  display: "inline-block",
  marginTop: "0.625rem",
  color: "#374151",
  fontSize: "1.875rem",
  lineHeight: "2.25rem",
  fontWeight: "800",
  textAlign: "center",
});

export const body = style({
  display: "flex",
  fontSize: "1.5rem",
  lineHeight: "2rem",
  textAlign: "center",
  flex: "1 1 0%",
  justifyContent: "center",
  alignItems: "center",
});

export const footer = style({
  display: "flex",
  flex: "1 1 0%",
  justifyContent: "center",
  alignItems: "center",
});

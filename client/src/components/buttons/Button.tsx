import React from "react";
import { styled } from "@material-ui/core/styles";
import MButton, { ButtonProps as MButtonProps } from "@material-ui/core/Button";

export interface ButtonProps extends MButtonProps {}

export const Button = styled((props: ButtonProps) => <MButton {...props} />)({
  alignItems: "center",
  background: "var(--color-blue-5, #4589ff)",
  borderRadius: "15px",
  boxShadow: "0px 10px 20px -13px rgba(32, 56, 117, 0.35)",
  color: "white",
  display: "flex",
  fontSize: "16px",
  justifyContent: "center",
  height: "50px",
  margin: "0 auto",
  transition: "all 0.2s ease",
  width: "180px",

  fontFamily: "inherit",
  fontWeight: 400,
  letterSpacing: "inherit",
  textTransform: "inherit",
  lineHeight: "inherit",

  "&:hover": {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "var(--color-blue-6, #1063ff)"
  },
  "&:active": {
    transform: "translateY(2px)",
    boxShadow: "none"
  },

  "&:disabled": {
    opacity: "0.5",
    color: "white"
  }
});

import React from "react";

import IconButton from "@material-ui/core/IconButton";
import { Send } from "react-feather";

export interface sendButtonProps {
  color?: "white" | "dark";
}
export const SendButton: React.FC<sendButtonProps> = ({
  color = "var(--color-blue-5, #4589ff)"
}) => (
  <IconButton>
    <Send color={color} />
  </IconButton>
);

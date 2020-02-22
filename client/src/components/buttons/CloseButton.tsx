import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { X } from "react-feather";

export interface CloseButtonProps {
  onClick: () => void;
  color: string;
}
export const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  color = "white"
}) => (
  <IconButton onClick={onClick}>
    <X color={color} />
  </IconButton>
);

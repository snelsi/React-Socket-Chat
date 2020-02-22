import React from "react";
import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import { ArrowLeft } from "react-feather";

export interface BackButtonProps extends LinkProps {
  color?: "white" | "dark";
}
export const BackButton: React.FC<BackButtonProps> = ({
  to = "/",
  color = "white"
}) => (
  <Back to={to}>
    <IconButton>
      <ArrowLeft color={color} />
    </IconButton>
  </Back>
);

const Back = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 48px;
  width: 48px;
`;

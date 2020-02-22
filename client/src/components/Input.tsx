import React from "react";
import styled from "styled-components";
import { InputBase, InputBaseProps } from "components";

interface Props extends InputBaseProps {
  label?: string;
  className?: string;
  stretch?: boolean;
}

export const Input: React.FC<Props> = ({
  label = "",
  className = "",
  stretch = false,
  ...props
}) => (
  <Label className={className} stretch={stretch}>
    {label && <div>{label}</div>}
    <InputBase {...props} />
  </Label>
);

const Label = styled.label<Props>`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #1a3b5d;
  margin: 0 auto;
  width: 100%;
  ${({ stretch }) => stretch && "grid-column: 1 / 3;"}

  -webkit-appearance: none;

  & div {
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

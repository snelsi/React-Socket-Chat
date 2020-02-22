import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const InputBase: React.FC<InputBaseProps> = ({
  required = true,
  type = "number",
  ...props
}) => <Input required={required} type={type} {...props} />;

const Input = styled.input<InputBaseProps>`
  align-items: center;
  background-color: white;
  border: 1px solid
    ${({ error }) => (error ? "red" : "var(--input-placeholder, #ced6e0)")};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  height: 50px;
  transition: all 0.25s ease-in-out;
  padding: 13px 0 13px 15px;
  overflow: hidden;
  width: 100%;

  color: initial;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  cursor: text;

  -webkit-border-radius: 5px;
  -webkit-appearance: none;

  &:hover,
  &:focus {
    border-color: #3d9cff;
  }
  &:focus {
    box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
    outline: none;
  }
  &::placeholder {
    color: var(--input-placeholder, #ced6e0);
  }
`;

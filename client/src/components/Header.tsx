import React from "react";
import { focusInput } from "scripts";
import { BackButton } from "components";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { User } from "react-feather";

interface HeaderProps {
  room: string;
  toggleUsers: () => void;
}
export const Header: React.FC<HeaderProps> = ({ room, toggleUsers }) => (
  <Container onClick={focusInput}>
    <Room>
      <BackButton to="/" />
      <h5>{room}</h5>
    </Room>
    <IconButton onClick={toggleUsers}>
      <User color="white" />
    </IconButton>
  </Container>
);

const Container = styled.div`
  align-items: center;
  background-color: var(--color-blue-5, #4589ff);
  display: flex;
  color: white;
  height: 48px;
  justify-content: space-between;
`;

const Room = styled.span`
  align-items: center;
  display: flex;

  & h5 {
    margin-left: 6px;
    margin-bottom: 3px;
    font-weight: 400;
    line-height: 32px;
  }
`;

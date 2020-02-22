import React from "react";
import styled from "styled-components";
import { User as IUser } from "interfaces";
import { CloseButton } from "components";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const OnlineIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" fill="#79ffe1" />
  </svg>
);

interface UsersOnlineProps {
  open: boolean;
  users: IUser[];
  onClose: () => void;
  onOpen: () => void;
}
export const UsersOnline: React.FC<UsersOnlineProps> = ({
  open,
  users,
  onClose,
  onOpen
}) => (
  <Drawer
    anchor="right"
    variant="persistent"
    open={open}
    onOpen={onOpen}
    onClose={onClose}
    ModalProps={{
      keepMounted: true
    }}
  >
    <CloseButton onClick={onClose} color="grey" />
    <h4>People online:</h4>
    <List>
      {users.map(({ name }) => (
        <User key={name}>
          <OnlineIcon />
          {name}
        </User>
      ))}
    </List>
  </Drawer>
);

const Drawer = styled(SwipeableDrawer)({
  "& .MuiDrawer-paper": {
    padding: "20px",
    width: "300px",
    "& h4": {
      marginBottom: " 20px"
    }
  },
  "& button": {
    position: "absolute",
    top: "12px",
    right: "12px"
  }
});

const List = styled.ul`
  display: grid;
  grid-gap: 4px;
  margin: 0;
  padding-inline-start: 0;
`;

const User = styled.li`
  align-items: center;
  display: flex;
  height: 32px;
  margin: 0;
`;

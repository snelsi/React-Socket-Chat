import React, { useState, useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { Header, MessageInput, Messages, UsersOnline } from "components";
import { restrictedNames } from "interfaces";
import styled from "styled-components";
import io from "socket.io-client";
import { newMessageNotification } from "scripts";

let socket: SocketIOClient.Socket;

const ENDPOINT = "https://snelsi-chat.herokuapp.com/";

export const Chat: React.FC = () => {
  const name = sessionStorage?.username?.trim().toLowerCase();
  const { pathname: room } = useLocation();
  if (!name || restrictedNames.includes(name)) {
    console.warn("You nedd to be logged to enter chat");
    sessionStorage.removeItem("username");
    sessionStorage.setItem("room", room.slice(1));
    return <Redirect push to="/" />;
  }
  return <ChatElement name={name} />;
};

interface ChatElementProps {
  name: string;
}
const ChatElement: React.FC<ChatElementProps> = ({ name }) => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [redirect, setRedirect] = useState("");
  const [messages, setMessages] = useState([]);
  const { pathname: room } = useLocation();

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, error => {
      if (error) {
        alert(error);
        setRedirect("/");
      }
    });
  }, [name, room]);

  useEffect(() => {
    socket.on("message", message => {
      newMessageNotification();
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit("disconnect");
      socket.off("message");
      socket.off("roomData");
    };
  }, [messages, name]);

  if (redirect) return <Redirect to={redirect} />;

  return (
    <Grid className={open ? "drawerOpen" : ""}>
      <ChatContainer>
        <Header room={room} toggleUsers={() => setOpen(!open)} />
        <Messages messages={messages} />
        <MessageInput socket={socket} />
      </ChatContainer>
      <UsersOnline
        open={open}
        onOpen={openMenu}
        onClose={closeMenu}
        users={users}
      />
    </Grid>
  );
};

const Grid = styled.div`
  transition: padding 0.2s ease;
  min-width: 320px;
  position: relative;
  height: 100%;
  @media (min-width: 620px) {
    &.drawerOpen {
      padding-right: 300px;
    }
  }
`;
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

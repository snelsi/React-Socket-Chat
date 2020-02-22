import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { Input, Button } from "components";
import { useInput } from "scripts";
import { restrictedNames } from "interfaces";

export const Join: React.FC = () => {
  const [redirect, setRedirect] = useState(null);
  const [name, setName, changeName] = useInput(sessionStorage?.username || "");
  const [room, , setRoom] = useInput(sessionStorage?.room || "");

  const HandleUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newName = name.trim();
    if (restrictedNames.includes(newName)) {
      window.alert("Nice try.");
      setName("");
    } else {
      sessionStorage.username = newName;
      sessionStorage.removeItem(room);
      setRedirect(room);
    }
  };

  if (!!redirect) return <Redirect push to={redirect} />;
  return (
    <Container>
      <Form onSubmit={HandleUpload}>
        <h4>Join</h4>
        <Input
          label="Name"
          placeholder="DinkySharkFighter32"
          value={name}
          onChange={changeName}
          type="text"
          autoFocus
        />
        <Input
          label="Room"
          placeholder="MyCoolRoom!"
          value={room}
          onChange={setRoom}
          type="text"
        />
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
const Form = styled.form`
  display: grid;
  width: -webkit-fill-available;
  max-width: 720px;
  grid-gap: 20px;
  padding: 24px 24px 96px;
  & button {
    margin-top: 20px;
  }
`;

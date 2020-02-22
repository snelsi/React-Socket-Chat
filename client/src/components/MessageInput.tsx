import React from "react";
import style from "styled-components";
import { useInput } from "scripts";
import { SendButton } from "components";
import { styled } from "@material-ui/core/styles";
import MUITextarea from "@material-ui/core/TextareaAutosize";

export const MessageInput = ({ socket }) => {
  const [message, setMessage, updateMessage] = useInput("");

  const sendMessage = () => {
    const msg = message.trim();
    if (!!msg) {
      socket.emit("sendMessage", msg, () => setMessage(""));
    }
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        sendMessage();
      }}
    >
      <Textarea
        id="messageInput"
        required
        placeholder="Type a message..."
        rowsMax={5}
        value={message}
        onChange={updateMessage}
        onKeyPressCapture={e => {
          if (e.key === "Shift") e.preventDefault();
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
      />
      <SendButton onClick={sendMessage} />
    </Form>
  );
};

const Form = style.form`
  min-height: 48px;
  position: relative;

  & button {
    position: absolute;
    right: 4px;
    bottom: 0;
  }
`;

const Textarea = styled(MUITextarea)({
  border: "none",
  borderTop: "1px solid #eee",
  fontSize: "16px",
  lineHeight: "20px",
  fontFamily: "inherit",
  resize: "none",
  minHeight: "48px",
  padding: "16px 64px 16px 16px",
  width: "100%",

  "&:focus": {
    outline: "none"
  },
  "&::placeholder": {
    fontColor: "#f8f8f8",
    opacity: 0.8
  }
});

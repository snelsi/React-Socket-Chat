import React from "react";
import { focusInput } from "scripts";
import styled from "styled-components";
import ScrollToBottom from "react-scroll-to-bottom";

import { Message } from "components";
import { Message as IMessage } from "interfaces";

interface MessagesProps {
  messages: IMessage[];
}
export const Messages: React.FC<MessagesProps> = ({ messages }) => (
  <Container onClick={focusInput}>
    <Grid onClick={focusInput}>
      {messages.map((message, i) => (
        <Message message={message} key={i} />
      ))}
    </Grid>
  </Container>
);

const Grid = styled.div`
  display: grid;
  grid-gap: 4px;
  padding: 20px;
  min-height: 100%;
`;
const Container = styled(ScrollToBottom)`
  flex-grow: 1;
  overflow: auto;
`;

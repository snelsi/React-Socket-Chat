import React from "react";
import styled from "styled-components";
import { Message as IMessage } from "interfaces";
import ReactEmoji from "react-emoji";

import { restrictedNames } from "interfaces";

interface MessageProps {
  message: IMessage;
}
export const Message: React.FC<MessageProps> = ({
  message: { text, user }
}) => {
  if (restrictedNames.includes(user))
    return <AdminMessage>{text}</AdminMessage>;
  const name = sessionStorage?.username.trim().toLowerCase();
  return user === name ? (
    <OutcomeMessage>
      <p>{ReactEmoji.emojify(text)}</p>
    </OutcomeMessage>
  ) : (
    <IncomeMessage>
      <div className="name">{name}</div>
      <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
    </IncomeMessage>
  );
};

const MessageBase = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px;
  border-radius: 8px;
  max-width: 420px;
  padding: 6px 16px;
  & div.name {
    font-size: 14px;
  }
  & p {
    margin: 0;
  }
`;

const IncomeMessage = styled(MessageBase)`
  background-color: var(--gray-1, #f4f4f4);
  color: #000;
  justify-self: flex-start;
`;

const OutcomeMessage = styled(MessageBase)`
  background-color: var(--color-blue-5, #4589ff);
  color: white;
  justify-self: flex-end;
`;

const AdminMessage = styled.div`
  color: rgba(0, 0, 0, 0.75);
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
`;

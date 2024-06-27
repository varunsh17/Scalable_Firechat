// components/MessageList.tsx
import React from 'react';

interface Message {
  id: string;
  content: string;
  user: string;
}

interface Props {
  messages: Message[];
}

export const MessageList: React.FC<Props> = ({ messages }) => {
  return (
    <div>
      {messages.map(message => (
        <div key={message.id}>
          <strong>{message.user}: </strong>
          <span>{message.content}</span>
        </div>
      ))}
    </div>
  );
};

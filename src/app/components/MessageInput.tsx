// components/MessageInput.tsx
import React, { useState } from 'react';

interface Props {
  sendMessage: (messageContent: string, user: string) => void;
}

export const MessageInput: React.FC<Props> = ({ sendMessage }) => {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('Anonymous');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() !== '') {
      sendMessage(message, user);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

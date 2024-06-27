// components/Chat.tsx
"use client"
// components/Chat.tsx
import React, { useEffect, useState } from 'react';
import firebase, { firestore } from '../../../firebaseConfig'; // Adjust the path as per your project structure
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('messages')
      .orderBy('timestamp')
      .onSnapshot((snapshot) => {
        const messagesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessages(messagesData);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendMessage = async (messageContent: string, user: string) => {
    await firestore.collection('messages').add({
      content: messageContent,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user
    });
  };

  return (
    <div>
      <h1>Chat Application</h1>
      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;

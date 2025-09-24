import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatContextType {
  messages: Message[];
  addMessage: (text: string, sender: 'user' | 'bot') => void;
  clearMessages: () => void;
  isTyping: boolean;
  setIsTyping: (typing: boolean) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  const value: ChatContextType = {
    messages,
    addMessage,
    clearMessages,
    isTyping,
    setIsTyping,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
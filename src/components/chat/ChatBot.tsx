import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { generateAIResponse } from './AIResponseGenerator';
import { getGreeting } from './ChatKnowledge';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    return await generateAIResponse(userMessage);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addMessage(userMessage, 'user');
    setInputValue('');
    setIsTyping(true);

    try {
      // Generate AI response with enhanced knowledge
      const botResponse = await generateBotResponse(userMessage);
      
      // Simulate realistic typing delay based on response length
      const typingDelay = Math.min(Math.max(botResponse.length * 20, 1000), 4000);
      
      setTimeout(() => {
        addMessage(botResponse, 'bot');
        setIsTyping(false);
      }, typingDelay);
    } catch (error) {
      console.error('Error generating response:', error);
      setTimeout(() => {
        addMessage("I apologize, but I'm having trouble processing your request right now. Please try again or contact our team directly for assistance.", 'bot');
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setTimeout(() => {
        addMessage(getGreeting(), 'bot');
      }, 500);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
            className="mb-4 w-96 h-[500px] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary via-primary-glow to-accent text-white relative overflow-hidden">
              {/* Animated background elements */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="flex items-center gap-3 relative z-10">
                <motion.div 
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Bot className="w-4 h-4" />
                </motion.div>
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    KNSOFT Assistant
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-3 h-3" />
                    </motion.div>
                  </h3>
                  <motion.p 
                    className="text-sm opacity-90"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    AI-Powered • Always Learning
                  </motion.p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 relative z-10"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 h-[360px] p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      'flex gap-3 max-w-[85%]',
                      message.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                    )}
                  >
                    <div className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
                      message.sender === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-muted text-muted-foreground'
                    )}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>
                    <div className={cn(
                      'rounded-2xl px-4 py-3 text-sm leading-relaxed',
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-muted text-foreground'
                    )}>
                      <div className="whitespace-pre-line">{message.text}</div>
                      <div className={cn(
                        'text-xs mt-2 opacity-70',
                        message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                      )}>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="bg-muted rounded-2xl px-4 py-3 relative">
                      <div className="flex gap-1">
                        <motion.div 
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div 
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div 
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-2 h-2 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={isOpen ? () => setIsOpen(false) : openChat}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-primary via-primary-glow to-accent hover:from-accent hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
        >
          {/* Animated background pulse */}
          <motion.div
            className="absolute inset-0 bg-white rounded-full"
            animate={{ 
              scale: [0, 1.5, 0],
              opacity: [0.3, 0, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 flex items-center justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Zap className="w-2 h-2 text-white" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </div>
  );
};

export default ChatBot;
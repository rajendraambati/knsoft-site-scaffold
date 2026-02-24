import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Sparkles, Zap, Loader2, ExternalLink, Headset, Brain, Bell } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import chatbotAvatar from '@/assets/chatbot-avatar.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  action?: 'job_application';
  reasoning?: string;
  jobTitle?: string;
  agentLabel?: string;
  sources?: Array<{
    content: string;
    similarity: number;
    metadata: any;
  }>;
}

const AGENT_NAMES = ['Sil', 'Aria', 'Elara', 'Celeste', 'Lyra'];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [agentName, setAgentName] = useState('');
  const [showBellNotification, setShowBellNotification] = useState(false);
  const [agentConnected, setAgentConnected] = useState(false);
  const agentConnectedRef = useRef(false);
  const agentNameRef = useRef('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Play notification sound
  const playNotificationSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
      oscillator.frequency.setValueAtTime(1100, audioCtx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.4);
    } catch (e) {
      // Audio not supported or blocked
    }
  };

  // Show bell notification after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowBellNotification(true);
        playNotificationSound();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const addMessage = (text: string, sender: 'user' | 'bot', extra?: Partial<Message>) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      ...extra
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const initializeKnowledgeBase = async () => {
    try {
      setIsInitializing(true);
      const { data, error } = await supabase.functions.invoke('scrape-and-embed');
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error initializing knowledge base:', error);
      return false;
    } finally {
      setIsInitializing(false);
    }
  };

  const isGreeting = (msg: string): boolean => {
    const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'hola', 'greetings', 'sup', 'whats up', "what's up"];
    const lower = msg.toLowerCase().trim();
    return greetings.some(g => lower === g || lower === g + '!' || lower === g + '.' || lower.startsWith(g + ' '));
  };

  const generateBotResponse = async (userMessage: string): Promise<Message> => {
    try {
      const conversationHistory = messages
        .filter(m => m.sender === 'user' || m.sender === 'bot')
        .map(m => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.text
        }));

      const { data, error } = await supabase.functions.invoke('rag-chat', {
        body: {
          message: userMessage,
          conversationHistory: conversationHistory.slice(-10)
        }
      });

      if (error) throw error;

      return {
        id: Date.now().toString(),
        text: data.response,
        sender: 'bot',
        timestamp: new Date(),
        action: data.action,
        jobTitle: data.jobTitle,
        reasoning: data.reasoning,
        sources: data.sources
      };
    } catch (error) {
      console.error('Error generating response:', error);
      return {
        id: Date.now().toString(),
        text: "I apologize, but I'm having trouble processing your request right now. Please try again or contact our team directly for assistance.",
        sender: 'bot',
        timestamp: new Date()
      };
    }
  };

  const handleJobApplication = (jobTitle: string) => {
    const jobSlug = jobTitle.toLowerCase().replace(/\s+/g, '-');
    navigate(`/careers/${jobSlug}`);
    setIsOpen(false);
    toast({
      title: "Redirecting to Application",
      description: `Opening the ${jobTitle} application form...`,
    });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue.trim();
    addMessage(userMessage, 'user');
    setInputValue('');
    setIsTyping(true);

    // Handle greeting → transfer to agent flow
    if (!agentConnectedRef.current && isGreeting(userMessage)) {
      const name = agentNameRef.current || AGENT_NAMES[Math.floor(Math.random() * AGENT_NAMES.length)];
      if (!agentNameRef.current) {
        setAgentName(name);
        agentNameRef.current = name;
      }

      setTimeout(() => {
        addMessage(`Please wait while I connect you to an operator.\nYour chat has been transferred to **${name}**.`, 'bot');
        
        setTimeout(() => {
          addMessage(`Hi, I am ${name}. Thank you for contacting Technical Support. How may I help you?`, 'bot', { agentLabel: name });
          setAgentConnected(true);
          agentConnectedRef.current = true;
          setIsTyping(false);
          playNotificationSound();
        }, 1500);
      }, 1000);
      return;
    }

    try {
      const botResponse = await generateBotResponse(userMessage);
      
      setTimeout(() => {
        if (agentConnectedRef.current && agentNameRef.current) {
          botResponse.agentLabel = agentNameRef.current;
        }
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
        playNotificationSound();
        
        if (botResponse.action === 'job_application' && botResponse.jobTitle) {
          setTimeout(() => {
            handleJobApplication(botResponse.jobTitle!);
          }, 1000);
        }
      }, 1000);
    } catch (error) {
      console.error('Error generating response:', error);
      setTimeout(() => {
        addMessage("I apologize, but I'm having trouble processing your request right now. Please try again or contact our team directly for assistance.", 'bot');
        setIsTyping(false);
        playNotificationSound();
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openChat = async () => {
    setIsOpen(true);
    setShowBellNotification(false);
    if (messages.length === 0) {
      setTimeout(() => {
        addMessage(`**We're Online!**\nHow may I help you today?`, 'bot');
      }, 300);
      
      // Initialize knowledge base in background
      await initializeKnowledgeBase();
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
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Headset className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    {agentConnected && agentName ? `${agentName}` : 'KNSOFT Support'}
                    <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
                  </h3>
                  <p className="text-xs opacity-90">
                    {agentConnected ? 'Technical Support' : 'Online'}
                  </p>
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
                    {message.sender === 'user' ? (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-primary text-white">
                        <User className="w-4 h-4" />
                      </div>
                    ) : (
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarImage src={chatbotAvatar} alt="Bot" />
                        <AvatarFallback><Bot className="w-4 h-4" /></AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      {/* Agent name label */}
                      {message.sender === 'bot' && message.agentLabel && (
                        <p className="text-xs font-semibold text-primary mb-1">{message.agentLabel}</p>
                      )}
                      <div className={cn(
                        'rounded-2xl px-4 py-3 text-sm leading-relaxed',
                        message.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-muted text-foreground'
                      )}>
                        {message.sender === 'bot' ? (
                          <div className="prose prose-sm dark:prose-invert max-w-none [&>p]:mb-1 [&>ul]:mb-1 [&>ol]:mb-1 [&>p:last-child]:mb-0">
                            <ReactMarkdown>{message.text}</ReactMarkdown>
                          </div>
                        ) : (
                          <div className="whitespace-pre-line">{message.text}</div>
                        )}
                        
                        {message.reasoning && (
                          <div className="mt-2 flex items-center gap-1 text-xs opacity-60">
                            <Brain className="w-3 h-3" />
                            <span>{message.reasoning}</span>
                          </div>
                        )}
                        
                        {message.sources && message.sources.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-border/30">
                            <p className="text-xs font-semibold mb-1 opacity-70 flex items-center gap-1">
                              <ExternalLink className="w-3 h-3" /> Sources
                            </p>
                            <div className="space-y-1">
                              {message.sources.map((source, idx) => (
                                <div key={idx} className="text-xs opacity-50 line-clamp-1">
                                  {source.content}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
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
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3"
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={chatbotAvatar} alt="Bot" />
                      <AvatarFallback><Bot className="w-4 h-4" /></AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-2xl px-4 py-3">
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
                    </div>
                  </motion.div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-border">
              {isInitializing && (
                <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  <span>Connecting...</span>
                </div>
              )}
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
                  {isTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bell Notification Icon */}
      <AnimatePresence>
        {showBellNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="absolute -top-2 -right-1 cursor-pointer"
            onClick={() => { setShowBellNotification(false); openChat(); }}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 15, -15, 10, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
              >
                <Bell className="w-5 h-5 text-accent fill-accent" />
              </motion.div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-background" />
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
          className="w-14 h-14 rounded-full bg-transparent hover:bg-transparent text-white shadow-none hover:shadow-none transition-all duration-300 relative overflow-visible group p-0 border-0"
        >
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
                <img src={chatbotAvatar} alt="Chat assistant" className="w-14 h-14 rounded-full object-cover" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </div>
  );
};

export default ChatBot;

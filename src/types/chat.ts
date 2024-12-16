export interface Message {
  role: 'assistant' | 'user';
  content: string;
}

export interface ChatMessageProps {
  message: Message;
}
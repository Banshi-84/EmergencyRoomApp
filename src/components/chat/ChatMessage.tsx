import React from 'react';
import { Bot, User } from 'lucide-react';
import { ChatMessageProps } from '../../types/chat';

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAssistant = message.role === 'assistant';
  
  return (
    <div className={`flex gap-3 ${isAssistant ? 'bg-gray-50' : ''} p-4`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center
        ${isAssistant ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
        {isAssistant ? <Bot size={20} /> : <User size={20} />}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-800 whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
};
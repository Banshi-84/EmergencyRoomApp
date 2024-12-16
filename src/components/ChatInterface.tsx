import React, { useState } from 'react';
import { Send, MapPin } from 'lucide-react';
import { ChatMessage } from './ChatMessage';

export const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant' as const, content: 'Hello! I\'m your Medical Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, 
      { role: 'user' as const, content: input },
      { role: 'assistant' as const, content: 'I understand your concern. While I can provide general guidance, please remember that in case of a medical emergency, you should call 911 immediately.' }
    ]);
    setInput('');
  };

  const showLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
      });
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Bot size={24} className="text-green-600" />
          <h2 className="font-semibold">Medical Assistant</h2>
        </div>
        <button
          onClick={showLocation}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Show my location"
        >
          <MapPin className="text-gray-600" />
        </button>
      </div>

      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
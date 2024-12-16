import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, handleSend }) => {
  return (
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
  );
};
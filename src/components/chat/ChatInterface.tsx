import React, { useState } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatHeader } from './ChatHeader';
import { ChatInput } from './ChatInput';
import { Message } from '../../types/chat';
import { getMedicalAdvice } from '../../utils/assistantApi'; // Import API functions

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm your Medical Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // loading state

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user input
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput(''); // Reset input fields
    setLoading(true); // Loading state start

    try {
      // Call OpenAI API to get assistant's reply
      const assistantResponse = await getMedicalAdvice(input);

      // Add assistant's reply
      setMessages(prev => [...prev, { role: 'assistant', content: assistantResponse }]);
    } catch (error) {
      console.error('Error fetching advice:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I couldn't fetch a response. Please try again later." }]);
    } finally {
      setLoading(false); // Finish loading
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
      <ChatHeader />
      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
        {loading && <div className="text-gray-500">Loading...</div>}
      </div>
      <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
    </div>
  );
};

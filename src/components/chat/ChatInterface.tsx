import React, { useState } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatHeader } from './ChatHeader';
import { ChatInput } from './ChatInput';
import { Message } from '../../types/chat';
import { getMedicalAdvice } from '../../utils/assistantApi'; // API関数をインポート

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm your Medical Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // ローディング状態

  const handleSend = async () => {
    if (!input.trim()) return;

    // ユーザーの入力を追加
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput(''); // 入力欄をリセット
    setLoading(true); // ローディング状態開始

    try {
      // OpenAI APIを呼び出してアシスタントの返答を取得
      const assistantResponse = await getMedicalAdvice(input);

      // アシスタントの返答を追加
      setMessages(prev => [...prev, { role: 'assistant', content: assistantResponse }]);
    } catch (error) {
      console.error('Error fetching advice:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I couldn't fetch a response. Please try again later." }]);
    } finally {
      setLoading(false); // ローディング状態終了
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

import React from 'react';
import { EmergencyButton } from './components/emergency/EmergencyButton';
import { ChatInterface } from './components/chat/ChatInterface';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Emergency Room Assistant</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 place-items-center">
          {/* Emergency Call Section */}
          <div className="w-full max-w-md mx-auto text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Emergency Call</h2>
            <p className="text-gray-600 mb-4">Press and hold for 5 seconds to call 911</p>
            <div className="flex justify-center">
              <EmergencyButton />
            </div>
          </div>

          {/* Chat Interface Section */}
          <div className="w-full max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Medical Assistant Chat</h2>
            <ChatInterface />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
import React from 'react';
import { Bot, MapPin } from 'lucide-react';
import { getCurrentLocation } from '../../utils/location';

export const ChatHeader = () => {
  const handleLocationClick = async () => {
    try {
      const position = await getCurrentLocation();
      const { latitude, longitude } = position.coords;
      window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-2">
        <Bot size={24} className="text-green-600" />
        <h2 className="font-semibold">Medical Assistant</h2>
      </div>
      <button
        onClick={handleLocationClick}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        title="Show my location"
      >
        <MapPin className="text-gray-600" />
      </button>
    </div>
  );
};
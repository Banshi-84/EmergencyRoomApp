import React, { useState, useRef } from 'react';
import { Phone } from 'lucide-react';

export const EmergencyButton = () => {
  const [pressing, setPressing] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number>();

  const startCall = () => {
    setPressing(true);
    timerRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timerRef.current);
          window.location.href = 'tel:911';
          return 0;
        }
        return prev + 2; // 5 seconds = 100 / 20 per 100ms
      });
    }, 100);
  };

  const cancelCall = () => {
    setPressing(false);
    setProgress(0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  return (
    <div className="relative">
      <button
        onMouseDown={startCall}
        onMouseUp={cancelCall}
        onMouseLeave={cancelCall}
        onTouchStart={startCall}
        onTouchEnd={cancelCall}
        className={`relative w-48 h-48 rounded-full bg-red-600 hover:bg-red-700 
          transform transition-transform ${pressing ? 'scale-95' : 'scale-100'}
          flex flex-col items-center justify-center gap-2 text-white font-bold
          shadow-lg hover:shadow-xl`}
      >
        <Phone size={48} className="animate-pulse" />
        <span className="text-xl">Emergency Call</span>
      </button>
      {pressing && (
        <div className="absolute bottom-0 left-0 h-1 bg-white rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }} />
      )}
    </div>
  );
};
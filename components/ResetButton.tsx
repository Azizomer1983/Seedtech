
import React from 'react';

interface ResetButtonProps {
  onClick: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-green-500"
    >
      🔄 إعادة تعيين
    </button>
  );
};

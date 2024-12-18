import React from 'react';
import { RotateCw } from 'lucide-react';

interface SpinButtonProps {
  onClick: () => void;
  isSpinning: boolean;
}

const SpinButton: React.FC<SpinButtonProps> = ({ onClick, isSpinning }) => {
  return (
    <button
      onClick={onClick}
      disabled={isSpinning}
      className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-purple-900 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg flex items-center gap-2 text-lg font-semibold"
    >
      <RotateCw className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
      {isSpinning ? 'Spinning...' : 'Spin!'}
    </button>
  );
};

export default SpinButton;
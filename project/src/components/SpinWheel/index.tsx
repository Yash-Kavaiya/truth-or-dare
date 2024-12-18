import React from 'react';
import SpinButton from './SpinButton';
import WheelSegment from './WheelSegment';
import Pointer from './Pointer';
import { useSpinWheel } from '../../hooks/useSpinWheel';

interface SpinWheelProps {
  players: string[];
  onSelectPlayer: (player: string) => void;
}

const SpinWheel: React.FC<SpinWheelProps> = ({ players, onSelectPlayer }) => {
  const { rotation, isSpinning, spinWheel } = useSpinWheel({
    players,
    onSelectPlayer,
    spinDuration: 5000, // 5 seconds spin
    spinRevolutions: 8, // More revolutions for excitement
  });

  return (
    <div className="relative w-96 h-96 mx-auto">
      <div className="relative w-full h-full">
        {/* Outer ring decoration */}
        <div className="absolute inset-0 rounded-full border-8 border-purple-600 shadow-lg" />
        
        {/* Spinning wheel */}
        <div
          className="absolute w-full h-full rounded-full overflow-hidden transition-transform ease-out"
          style={{
            transform: `rotate(${rotation}deg)`,
            transitionDuration: isSpinning ? '5000ms' : '0ms',
          }}
        >
          {players.map((player, index) => (
            <WheelSegment
              key={index}
              player={player}
              index={index}
              totalPlayers={players.length}
            />
          ))}
        </div>

        {/* Center decoration */}
        <div className="absolute top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 rounded-full bg-purple-600 shadow-inner z-10" />
        
        <Pointer />
      </div>

      {/* Spin button */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8">
        <SpinButton onClick={spinWheel} isSpinning={isSpinning} />
      </div>
    </div>
  );
};

export default SpinWheel;
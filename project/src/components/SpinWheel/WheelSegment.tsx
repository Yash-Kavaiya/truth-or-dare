import React from 'react';

interface WheelSegmentProps {
  player: string;
  index: number;
  totalPlayers: number;
}

const WheelSegment: React.FC<WheelSegmentProps> = ({ player, index, totalPlayers }) => {
  const angle = (360 / totalPlayers) * index;
  const colors = ['#C084FC', '#E9D5FF', '#DDD6FE', '#F3E8FF'];
  
  return (
    <div
      className="absolute w-full h-full"
      style={{
        transform: `rotate(${angle}deg)`,
        background: `linear-gradient(${colors[index % colors.length]}, ${
          colors[(index + 1) % colors.length]
        })`,
        clipPath: `polygon(50% 50%, 50% 0, ${50 + 50 * Math.cos((2 * Math.PI * (index + 1)) / totalPlayers)}% ${
          50 + 50 * Math.sin((2 * Math.PI * (index + 1)) / totalPlayers)
        }%)`,
      }}
    >
      <div
        className="absolute whitespace-nowrap text-base font-bold text-purple-900"
        style={{
          left: '50%',
          top: '25%',
          transform: `translateX(-50%) rotate(${90 + (360 / totalPlayers / 2)}deg)`,
        }}
      >
        {player}
      </div>
    </div>
  );
};

export default WheelSegment;
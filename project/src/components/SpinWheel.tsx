import React from 'react';

interface SpinWheelProps {
  players: string[];
  onSelectPlayer: (player: string) => void;
}

const SpinWheel: React.FC<SpinWheelProps> = ({ players, onSelectPlayer }) => {
  const [rotation, setRotation] = React.useState(0);
  const [isSpinning, setIsSpinning] = React.useState(false);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const extraSpins = 5; // Number of full rotations
    const randomDegree = Math.random() * 360;
    const totalRotation = rotation + (360 * extraSpins) + randomDegree;
    setRotation(totalRotation);

    // Calculate selected player
    setTimeout(() => {
      const normalizedDegree = randomDegree;
      const segmentSize = 360 / players.length;
      const selectedIndex = Math.floor(normalizedDegree / segmentSize);
      const selectedPlayer = players[selectedIndex];
      onSelectPlayer(selectedPlayer);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="relative w-80 h-80 mx-auto">
      <div
        className="absolute w-full h-full rounded-full border-4 border-purple-600 transition-transform duration-3000 ease-out"
        style={{
          transform: `rotate(${rotation}deg)`,
          background: `conic-gradient(${players
            .map(
              (_, index) =>
                `${index % 2 ? '#C084FC' : '#E9D5FF'} ${
                  (index * 360) / players.length
                }deg ${((index + 1) * 360) / players.length}deg`
            )
            .join(', ')})`,
        }}
      >
        {players.map((player, index) => {
          const angle = (360 / players.length) * index;
          return (
            <div
              key={index}
              className="absolute w-full h-full flex items-center justify-center text-center"
              style={{
                transform: `rotate(${angle}deg)`,
              }}
            >
              <span
                className="absolute text-sm font-bold text-purple-900"
                style={{
                  transform: 'translateY(-50%) rotate(90deg)',
                  left: '50%',
                }}
              >
                {player}
              </span>
            </div>
          );
        })}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors disabled:bg-purple-400"
        >
          {isSpinning ? 'Spinning...' : 'Spin!'}
        </button>
      </div>
    </div>
  );
};

export default SpinWheel;
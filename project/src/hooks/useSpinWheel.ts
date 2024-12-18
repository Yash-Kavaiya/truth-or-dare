import { useState, useCallback } from 'react';

interface UseSpinWheelProps {
  players: string[];
  onSelectPlayer: (player: string) => void;
  spinDuration: number;
  spinRevolutions: number;
}

export const useSpinWheel = ({
  players,
  onSelectPlayer,
  spinDuration,
  spinRevolutions,
}: UseSpinWheelProps) => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = useCallback(() => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    
    // Calculate final rotation
    const baseRotation = 360 * spinRevolutions;
    const randomDegree = Math.random() * 360;
    const totalRotation = rotation + baseRotation + randomDegree;
    
    // Update rotation for the spin animation
    setRotation(totalRotation);

    // Calculate selected player
    setTimeout(() => {
      const normalizedDegree = randomDegree;
      const segmentSize = 360 / players.length;
      const selectedIndex = Math.floor(normalizedDegree / segmentSize);
      const selectedPlayer = players[selectedIndex];
      onSelectPlayer(selectedPlayer);
      setIsSpinning(false);
    }, spinDuration);
  }, [isSpinning, rotation, players, onSelectPlayer, spinDuration, spinRevolutions]);

  return {
    rotation,
    isSpinning,
    spinWheel,
  };
};
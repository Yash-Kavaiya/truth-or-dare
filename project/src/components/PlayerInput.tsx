import React from 'react';
import { UserPlus2 } from 'lucide-react';

interface PlayerInputProps {
  players: string[];
  setPlayers: React.Dispatch<React.SetStateAction<string[]>>;
}

const PlayerInput: React.FC<PlayerInputProps> = ({ players, setPlayers }) => {
  const [newPlayer, setNewPlayer] = React.useState('');

  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPlayer.trim() && players.length < 12) {
      setPlayers([...players, newPlayer.trim()]);
      setNewPlayer('');
    }
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-800">Add Players</h2>
      <form onSubmit={handleAddPlayer} className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newPlayer}
            onChange={(e) => setNewPlayer(e.target.value)}
            placeholder="Enter player name"
            className="flex-1 px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            maxLength={20}
          />
          <button
            type="submit"
            disabled={players.length >= 12}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-gray-400"
          >
            <UserPlus2 className="w-6 h-6" />
          </button>
        </div>
      </form>
      
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Players ({players.length}/12):</h3>
        <div className="flex flex-wrap gap-2">
          {players.map((player, index) => (
            <div
              key={index}
              className="bg-purple-100 px-3 py-1 rounded-full flex items-center gap-2"
            >
              <span>{player}</span>
              <button
                onClick={() => setPlayers(players.filter((_, i) => i !== index))}
                className="text-red-500 hover:text-red-700"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerInput;
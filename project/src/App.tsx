import React from 'react';
import { Sparkles } from 'lucide-react';
import PlayerInput from './components/PlayerInput';
import SpinWheel from './components/SpinWheel';
import TruthOrDare from './components/TruthOrDare';

function App() {
  const [players, setPlayers] = React.useState<string[]>([]);
  const [gameStarted, setGameStarted] = React.useState(false);
  const [selectedPlayer, setSelectedPlayer] = React.useState<string | null>(null);

  const handleStartGame = () => {
    if (players.length >= 2) {
      setGameStarted(true);
    }
  };

  const handleNewGame = () => {
    setGameStarted(false);
    setSelectedPlayer(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8" />
            Truth or Dare
            <Sparkles className="w-8 h-8" />
          </h1>
        </header>

        <main className="max-w-2xl mx-auto">
          {!gameStarted ? (
            <div className="space-y-8">
              <PlayerInput players={players} setPlayers={setPlayers} />
              
              {players.length >= 2 && (
                <div className="text-center">
                  <button
                    onClick={handleStartGame}
                    className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
                  >
                    Start Game
                  </button>
                </div>
              )}
              
              {players.length < 2 && (
                <p className="text-center text-purple-600">
                  Add at least 2 players to start the game
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-8">
              {!selectedPlayer ? (
                <SpinWheel
                  players={players}
                  onSelectPlayer={setSelectedPlayer}
                />
              ) : (
                <TruthOrDare
                  selectedPlayer={selectedPlayer}
                  onComplete={() => setSelectedPlayer(null)}
                />
              )}
              
              <div className="text-center">
                <button
                  onClick={handleNewGame}
                  className="text-purple-600 underline hover:text-purple-800"
                >
                  Start New Game
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
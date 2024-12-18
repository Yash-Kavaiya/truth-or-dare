import React from 'react';

interface TruthOrDareProps {
  selectedPlayer: string;
  onComplete: () => void;
}

const TruthOrDare: React.FC<TruthOrDareProps> = ({ selectedPlayer, onComplete }) => {
  const [choice, setChoice] = React.useState<'truth' | 'dare' | null>(null);
  const [challenge, setChallenge] = React.useState('');

  const truths = [
    "What's your biggest fear?",
    "What's the most embarrassing thing you've ever done?",
    "What's your biggest secret?",
    "What's the worst lie you've ever told?",
    "What's your biggest regret?",
  ];

  const dares = [
    "Do 10 push-ups",
    "Sing your favorite song",
    "Dance for 30 seconds",
    "Tell a joke",
    "Make a funny face and take a selfie",
  ];

  const handleChoice = (selected: 'truth' | 'dare') => {
    setChoice(selected);
    const challenges = selected === 'truth' ? truths : dares;
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    setChallenge(randomChallenge);
  };

  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-bold text-purple-800">
        {selectedPlayer}'s Turn!
      </h2>
      
      {!choice ? (
        <div className="space-x-4">
          <button
            onClick={() => handleChoice('truth')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Truth
          </button>
          <button
            onClick={() => handleChoice('dare')}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            Dare
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {choice === 'truth' ? 'Truth' : 'Dare'}:
            </h3>
            <p className="text-lg">{challenge}</p>
          </div>
          
          <button
            onClick={onComplete}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            Complete Challenge
          </button>
        </div>
      )}
    </div>
  );
};

export default TruthOrDare;
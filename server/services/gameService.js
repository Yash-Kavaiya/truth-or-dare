class GameService {
    constructor() {
      this.activeGames = new Map();
    }
  
    createGame(players) {
      const gameId = Date.now().toString();
      this.activeGames.set(gameId, {
        players,
        currentPlayerIndex: 0,
        rounds: []
      });
      return gameId;
    }
  
    getGameState(gameId) {
      return this.activeGames.get(gameId);
    }
  
    updateGameState(gameId, state) {
      this.activeGames.set(gameId, state);
    }
  }
  
  module.exports = new GameService();
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameState } from '@core/models/game-state.model';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private readonly gameState = new BehaviorSubject<GameState>({
    players: [],
    currentPlayer: null,
    isSpinning: false
  });

  readonly gameState$ = this.gameState.asObservable();

  updateGameState(newState: Partial<GameState>): void {
    this.gameState.next({
      ...this.gameState.value,
      ...newState
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '@shared/shared.module';
import { GameComponent } from './components/game/game.component';
import { PlayerCircleComponent } from './components/player-circle/player-circle.component';

@NgModule({
  declarations: [
    GameComponent,
    PlayerCircleComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule
  ]
})
export class GameModule { }

// src/app/components/player-circle/player-circle.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-player-circle',
  template: `
    <div class="circle-container" [style.transform]="'rotate(' + rotation + 'deg)'">
      <div
        *ngFor="let player of players; let i = index"
        class="player-slot"
        [style.transform]="getPlayerPosition(i)">
        {{ player }}
      </div>
    </div>
  `,
  styles: [`
    .circle-container {
      width: 300px;
      height: 300px;
      position: relative;
      margin: 50px auto;
      transition: transform 3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .player-slot {
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #2196F3;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      transform-origin: 150px 150px;
    }
  `],
  animations: [
    trigger('spin', [
      state('spinning', style({ transform: 'rotate({{degrees}}deg)' }), { params: { degrees: 0 } }),
      transition('* => spinning', animate('3s cubic-bezier(0.4, 0, 0.2, 1)'))
    ])
  ]
})
export class PlayerCircleComponent {
  @Input() players: string[] = [];
  @Output() spinComplete = new EventEmitter<string>();

  rotation = 0;
  isSpinning = false;

  getPlayerPosition(index: number): string {
    const angle = (360 / this.players.length) * index;
    return `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
  }

  spin() {
    if (this.isSpinning) return;

    this.isSpinning = true;
    const spins = 5; // Number of full rotations
    const extraDegrees = Math.random() * 360;
    const totalDegrees = spins * 360 + extraDegrees;

    this.rotation += totalDegrees;

    setTimeout(() => {
      this.isSpinning = false;
      const selectedIndex = Math.floor(((this.rotation % 360) / 360) * this.players.length);
      this.spinComplete.emit(this.players[selectedIndex]);
    }, 3000);
  }
}

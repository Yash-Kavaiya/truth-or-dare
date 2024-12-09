// src/app/components/question-dialog/question-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-question-dialog',
  template: `
    <div class="dialog-container">
      <h2>{{data.player}}, Choose:</h2>
      <div class="button-container">
        <button (click)="selectOption('truth')" class="truth-btn">Truth</button>
        <button (click)="selectOption('dare')" class="dare-btn">Dare</button>
      </div>

      <div *ngIf="selectedQuestion" class="question-container">
        <h3>{{selectedQuestion.type | titlecase}}:</h3>
        <p>{{selectedQuestion.question}}</p>
        <button (click)="complete()" class="complete-btn">Complete</button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-container {
      padding: 24px;
      text-align: center;
    }

    .button-container {
      display: flex;
      justify-content: space-around;
      margin: 24px 0;
    }

    button {
      padding: 12px 24px;
      border-radius: 24px;
      border: none;
      cursor: pointer;
      font-weight: bold;
      transition: transform 0.2s;
    }

    button:hover {
      transform: scale(1.05);
    }

    .truth-btn {
      background: #2196F3;
      color: white;
    }

    .dare-btn {
      background: #F44336;
      color: white;
    }

    .complete-btn {
      background: #4CAF50;
      color: white;
      margin-top: 24px;
    }

    .question-container {
      margin-top: 24px;
      padding: 16px;
      background: #f5f5f5;
      border-radius: 8px;
    }
  `]
})
export class QuestionDialogComponent {
  selectedQuestion: any = null;

  constructor(
    private dialogRef: MatDialogRef<QuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { player: string },
    private gameService: GameService
  ) {}

  selectOption(type: 'truth' | 'dare') {
    this.gameService.getQuestion(type).subscribe(
      question => this.selectedQuestion = question
    );
  }

  complete() {
    this.dialogRef.close();
  }
}

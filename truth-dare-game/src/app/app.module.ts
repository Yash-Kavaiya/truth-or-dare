import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { PlayerCircleComponent } from './components/player-circle/player-circle.component';
import { QuestionDialogComponent } from './components/question-dialog/question-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCircleComponent,
    QuestionDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

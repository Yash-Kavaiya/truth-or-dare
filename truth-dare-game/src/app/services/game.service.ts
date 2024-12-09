// src/app/services/game.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  savePlayers(players: string[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/players`, { players });
  }

  getQuestion(type: 'truth' | 'dare'): Observable<any> {
    return this.http.get(`${this.apiUrl}/question/${type}`);
  }
}

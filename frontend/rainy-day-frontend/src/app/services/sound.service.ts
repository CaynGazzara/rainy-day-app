import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sound } from '../models/sound.model';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private apiUrl = 'https://localhost:7236/api/sounds';

  constructor(private http: HttpClient) { }

  getSounds(): Observable<Sound[]> {
    return this.http.get<Sound[]>(this.apiUrl);
  }

  getSound(id: number): Observable<Sound> {
    return this.http.get<Sound>(`${this.apiUrl}/${id}`);
  }

  getSoundsByCategory(category: string): Observable<Sound[]> {
    return this.http.get<Sound[]>(`${this.apiUrl}?category=${category}`);
  }
}
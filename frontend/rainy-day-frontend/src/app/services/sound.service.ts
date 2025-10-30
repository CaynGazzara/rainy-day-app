import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sound } from '../models/sound.model';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private apiUrl = 'http://localhost:5193/api/sounds';

  // Mapeamento local dos áudios
  private audioFileMap: { [key: number]: string } = {
    1: 'assets/sounds/rain-thunder.mp3',
    2: 'assets/sounds/fireplace.mp3', 
    3: 'assets/sounds/ocean-waves.mp3',
    4: 'assets/sounds/rain-wind.mp3',
    5: 'assets/sounds/crickets.mp3',
    6: 'assets/sounds/seagull.mp3',
  };

  constructor(private http: HttpClient) { }

  getSounds(): Observable<Sound[]> {
    return this.http.get<Sound[]>(this.apiUrl).pipe(
      map(sounds => sounds.map(sound => ({
        ...sound,
        // ✅ Frontend adiciona a URL local do áudio
        audioUrl: this.getLocalAudioUrl(sound.id)
      })))
    );
  }

  private getLocalAudioUrl(soundId: number): string {
    return this.audioFileMap[soundId] || 'assets/sounds/default.mp3';
  }

  getSound(id: number): Observable<Sound> {
    return this.http.get<Sound>(`${this.apiUrl}/${id}`).pipe(
      map(sound => ({
        ...sound,
        audioUrl: this.getLocalAudioUrl(sound.id)
      }))
    );
  }

  getSoundsByCategory(category: string): Observable<Sound[]> {
    return this.http.get<Sound[]>(`${this.apiUrl}/category/${category}`).pipe(
      map(sounds => sounds.map(sound => ({
        ...sound,
        audioUrl: this.getLocalAudioUrl(sound.id)
      })))
    );
  }
}
import { Component, OnInit } from '@angular/core';
import { Sound } from './models/sound.model';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nature Sounds';
  currentlyPlaying: Sound | null = null;
  isPlaying: boolean = false; // ✅ Estado global de reprodução

  onSoundPlay(sound: Sound): void {
    // Se já está tocando outro som, para ele primeiro
    if (this.currentlyPlaying && this.currentlyPlaying.id !== sound.id) {
      this.isPlaying = false; // Para o som anterior
    }

    this.currentlyPlaying = sound;
    this.isPlaying = true; // ✅ Novo som deve tocar
  }

  onSoundPause(): void {
    this.isPlaying = false;
    this.currentlyPlaying = null;
  }

  onPlayerPause(): void {
    this.isPlaying = false;
  }
}
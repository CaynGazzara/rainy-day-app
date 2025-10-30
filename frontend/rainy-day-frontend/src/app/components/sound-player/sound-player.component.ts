import { Component, Input, OnDestroy } from '@angular/core';
import { Sound } from '../../models/sound.model';

@Component({
  standalone: false,
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.scss'],
})
export class SoundPlayerComponent implements OnDestroy {
  @Input() sound!: Sound;
  @Input() isPlaying: boolean = false;

  audio: HTMLAudioElement | null = null;
  volume: number = 0.5;

  togglePlay(): void {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play(): void {
    if (!this.audio) {
      this.audio = new Audio(this.sound.audioUrl);
      this.audio.volume = this.volume;
      this.audio.loop = true;
    }

    this.audio.play().then(() => {
      this.isPlaying = true;
    }).catch(error => {
      console.error('Error playing audio:', error);
    });
  }

  pause(): void {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  setVolume(volume: number): void {
    this.volume = volume;
    if (this.audio) {
      this.audio.volume = volume;
    }
  }

  ngOnDestroy(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
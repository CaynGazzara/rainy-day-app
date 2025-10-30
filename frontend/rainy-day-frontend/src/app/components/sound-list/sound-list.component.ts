import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sound } from '../../models/sound.model';
import { SoundService } from '../../services/sound.service';

@Component({
  standalone: false,
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.scss'],
})
export class SoundListComponent implements OnInit {
  sounds: Sound[] = [];
  categories: string[] = ['Todos', 'Chuva', 'Tempestade', 'Vento', 'Água'];
  selectedCategory: string = 'Todos';
  currentlyPlaying: Sound | null = null;

  @Output() soundPlay = new EventEmitter<Sound>();
  @Output() soundPause = new EventEmitter<void>();

  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
    this.loadSounds();
  }

  loadSounds(): void {
    this.soundService.getSounds().subscribe(sounds => {
      this.sounds = sounds;
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'Todos') {
      this.loadSounds();
    } else {
      this.soundService.getSoundsByCategory(category).subscribe(sounds => {
        this.sounds = sounds;
      });
    }
  }

  togglePlay(sound: Sound): void {
    if (this.currentlyPlaying === sound) {
      // Pausar
      this.currentlyPlaying = null;
      this.soundPause.emit();
    } else {
      // Reproduzir novo som
      this.currentlyPlaying = sound;
      this.soundPlay.emit(sound);
    }
  }
}
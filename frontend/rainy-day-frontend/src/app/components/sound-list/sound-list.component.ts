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
  categories: string[] = ['Todos', 'Tempestade', 'Fogo', 'Água', 'Chuva','Animais'];
  selectedCategory: string = 'Todos';
  currentlyPlaying: Sound | null = null;

  @Output() soundPlay = new EventEmitter<Sound>();
  @Output() soundPause = new EventEmitter<void>();

  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
    console.log('SoundListComponent inicializado');
    this.loadSounds();
  }

  loadSounds(): void {
    console.log('Carregando todos os sons...');
    this.soundService.getSounds().subscribe({
      next: (sounds) => {
        console.log('Sons carregados:', sounds);
        this.sounds = sounds;
      },
      error: (error) => {
        console.error('Erro ao carregar sons:', error);
      }
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    console.log('Categoria selecionada:', category);

    if (category === 'Todos') {
      this.loadSounds();
    } else {
      this.soundService.getSoundsByCategory(category).subscribe({
        next: (sounds) => {
          console.log('Sons filtrados:', sounds);
          this.sounds = sounds;
        },
        error: (error) => {
          console.error('Erro ao filtrar sons:', error);
          // Fallback: filtrar localmente
          this.filterLocally(category);
        }
      });
    }
  }

  // Fallback: filtro local se a API falhar
  private filterLocally(category: string): void {
    this.soundService.getSounds().subscribe(allSounds => {
      this.sounds = allSounds.filter(sound =>
        sound.category.toLowerCase() === category.toLowerCase()
      );
      console.log('Sons filtrados localmente:', this.sounds);
    });
  }

togglePlay(sound: Sound): void {
  if (this.currentlyPlaying === sound) {
    // Se clicou no mesmo som que está tocando, pausa
    this.currentlyPlaying = null;
    this.soundPause.emit(); // ✅ Emite pausa
  } else {
    // Se clicou em um som diferente, toca o novo
    this.currentlyPlaying = sound;
    this.soundPlay.emit(sound); // ✅ Emite play com o novo som
  }
}
}
import { Component, Input, Output, EventEmitter, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Sound } from '../../models/sound.model';

@Component({
  standalone: false, 
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.scss']
})
export class SoundPlayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() sound!: Sound;
  @Input() isPlaying: boolean = false; // ✅ Recebe estado do parent
  @Output() play = new EventEmitter<void>();
  @Output() pause = new EventEmitter<void>();
  
  audio: HTMLAudioElement | null = null;
  volume: number = 0.7;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.initializeAudio();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // ✅ Se o som mudou, reinicializa o áudio
    if (changes['sound'] && this.sound) {
      this.initializeAudio();
    }
    
    // ✅ Se o estado de reprodução mudou, sincroniza
    if (changes['isPlaying']) {
      this.syncPlaybackState();
    }
  }

  initializeAudio(): void {
    // Para e limpa o áudio anterior
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }

    console.log('Inicializando áudio:', this.sound.name);
    this.isLoading = true;
    
    this.audio = new Audio();
    this.audio.src = this.sound.audioUrl;
    this.audio.volume = this.volume;
    this.audio.loop = true;
    
    this.audio.addEventListener('canplaythrough', () => {
      console.log('✅ Áudio carregado:', this.sound.name);
      this.isLoading = false;
      // Se deveria estar tocando, inicia a reprodução
      if (this.isPlaying) {
        this.playAudio();
      }
    });
    
    this.audio.addEventListener('error', (e) => {
      console.error('❌ Erro no áudio:', this.sound.name, e);
      this.isLoading = false;
    });

    this.audio.load();
  }

  syncPlaybackState(): void {
    if (!this.audio || this.isLoading) return;
    
    if (this.isPlaying && this.audio.paused) {
      this.playAudio();
    } else if (!this.isPlaying && !this.audio.paused) {
      this.pauseAudio();
    }
  }

  togglePlay(): void {
    if (this.isLoading) return;

    if (this.isPlaying) {
      this.pause.emit(); // ✅ Emite evento para o parent
    } else {
      this.play.emit(); // ✅ Emite evento para o parent
    }
  }

  playAudio(): void {
    if (!this.audio || this.isLoading) return;

    this.audio.play().then(() => {
      console.log('✅ Reproduzindo:', this.sound.name);
    }).catch(error => {
      console.error('❌ Erro ao reproduzir:', error);
      this.pause.emit(); // Notifica o parent em caso de erro
    });
  }

  pauseAudio(): void {
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
      console.log('⏸️ Pausado:', this.sound.name);
    }
  }

  setVolume(volume: number): void {
    this.volume = volume;
    if (this.audio) {
      this.audio.volume = volume;
    }
  }

  ngOnDestroy(): void {
    this.pauseAudio();
  }
}
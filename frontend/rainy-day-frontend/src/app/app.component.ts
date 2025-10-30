import { Component, OnInit } from '@angular/core';
import { Sound } from './models/sound.model';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Rainy Day Sounds';

  ngOnInit() {
    console.log('AppComponent initialized');
  }
  currentlyPlaying: Sound | null = null;
}
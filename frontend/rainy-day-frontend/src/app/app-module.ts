import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { SoundListComponent } from './components/sound-list/sound-list.component';
import { SoundPlayerComponent } from './components/sound-player/sound-player.component';

@NgModule({
  declarations: [
    AppComponent,
    SoundListComponent,
    SoundPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
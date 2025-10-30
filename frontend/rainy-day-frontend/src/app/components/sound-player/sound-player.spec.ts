import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundPlayer } from './sound-player';

describe('SoundPlayer', () => {
  let component: SoundPlayer;
  let fixture: ComponentFixture<SoundPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoundPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundPlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

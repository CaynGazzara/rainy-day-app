import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundList } from './sound-list';

describe('SoundList', () => {
  let component: SoundList;
  let fixture: ComponentFixture<SoundList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoundList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

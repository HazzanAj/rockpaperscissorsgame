import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameinprogressComponent } from './gameinprogress.component';

describe('GameinprogressComponent', () => {
  let component: GameinprogressComponent;
  let fixture: ComponentFixture<GameinprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameinprogressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameinprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

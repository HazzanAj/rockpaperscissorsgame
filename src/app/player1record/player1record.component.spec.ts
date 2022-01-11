import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Player1recordComponent } from './player1record.component';

describe('Player1recordComponent', () => {
  let component: Player1recordComponent;
  let fixture: ComponentFixture<Player1recordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Player1recordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Player1recordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

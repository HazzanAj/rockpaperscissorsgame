import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Player2recordComponent } from './player2record.component';

describe('Player2recordComponent', () => {
  let component: Player2recordComponent;
  let fixture: ComponentFixture<Player2recordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Player2recordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Player2recordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

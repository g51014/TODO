import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAreaComponent } from './cards-area.component';

describe('CardsAreaComponent', () => {
  let component: CardsAreaComponent;
  let fixture: ComponentFixture<CardsAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

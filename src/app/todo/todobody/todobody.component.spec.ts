import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodobodyComponent } from './todobody.component';

describe('TodobodyComponent', () => {
  let component: TodobodyComponent;
  let fixture: ComponentFixture<TodobodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodobodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodobodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

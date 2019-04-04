import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicesMenuComponent } from './exercices-menu.component';

describe('ExercicesMenuComponent', () => {
  let component: ExercicesMenuComponent;
  let fixture: ComponentFixture<ExercicesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

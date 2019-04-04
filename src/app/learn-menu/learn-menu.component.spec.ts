import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMenuComponent } from './learn-menu.component';

describe('LearnMenuComponent', () => {
  let component: LearnMenuComponent;
  let fixture: ComponentFixture<LearnMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

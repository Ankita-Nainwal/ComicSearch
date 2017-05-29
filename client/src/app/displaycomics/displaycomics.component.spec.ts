import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycomicsComponent } from './displaycomics.component';

describe('DisplaycomicsComponent', () => {
  let component: DisplaycomicsComponent;
  let fixture: ComponentFixture<DisplaycomicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaycomicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

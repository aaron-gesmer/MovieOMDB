import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyWatchedComponent } from './already-watched.component';

describe('AlreadyWatchedComponent', () => {
  let component: AlreadyWatchedComponent;
  let fixture: ComponentFixture<AlreadyWatchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyWatchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyWatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

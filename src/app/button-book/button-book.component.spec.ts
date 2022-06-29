import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBookComponent } from './button-book.component';

describe('ButtonBookComponent', () => {
  let component: ButtonBookComponent;
  let fixture: ComponentFixture<ButtonBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

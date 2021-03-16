import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleCheckComponent } from './style-check.component';

describe('StyleCheckComponent', () => {
  let component: StyleCheckComponent;
  let fixture: ComponentFixture<StyleCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

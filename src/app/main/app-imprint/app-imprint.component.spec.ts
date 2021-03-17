import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppImprintComponent } from './app-imprint.component';

describe('AppImprintComponent', () => {
  let component: AppImprintComponent;
  let fixture: ComponentFixture<AppImprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppImprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSpanNumberComponent } from './custom-span-number.component';

describe('CustomSpanNumberComponent', () => {
  let component: CustomSpanNumberComponent;
  let fixture: ComponentFixture<CustomSpanNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSpanNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSpanNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

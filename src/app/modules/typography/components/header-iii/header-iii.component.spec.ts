import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIiiComponent } from './header-iii.component';

describe('HeaderIiiComponent', () => {
  let component: HeaderIiiComponent;
  let fixture: ComponentFixture<HeaderIiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderIiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

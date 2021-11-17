import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSectionBgComponent } from './profile-section-bg.component';

describe('ProfileSectionBgComponent', () => {
  let component: ProfileSectionBgComponent;
  let fixture: ComponentFixture<ProfileSectionBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSectionBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSectionBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantProfilePageComponent } from './applicant-profile-page.component';

describe('ApplicantProfilePageComponent', () => {
  let component: ApplicantProfilePageComponent;
  let fixture: ComponentFixture<ApplicantProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantProfilePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

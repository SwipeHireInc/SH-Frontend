import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-applicant-resume',
  imports: [],
  templateUrl: './applicant-resume.component.html',
  styleUrl: './applicant-resume.component.scss'
})
export class ApplicantResumeComponent {
  close!: boolean;

  resumeform: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.resumeform = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      height: [''],
      image: [null],
      phone: [''],
      location: [''],
      languages: [''],
      skills: [''],
      experience: [''],
      study: [''],
      habits: ['']
    })
  }

  trigger(close: boolean): void {
    this.close = close
  }
}

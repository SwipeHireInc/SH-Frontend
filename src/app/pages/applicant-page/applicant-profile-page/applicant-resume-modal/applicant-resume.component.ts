import { Component, EventEmitter, output, Output, inject } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {createFormWithModel} from '../../../../customfunctions/createformwithmodel';
import {Resume, resumeDefault} from './resume_entity/resume_entity';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-applicant-resume',
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  templateUrl: './applicant-resume.component.html',
  styleUrl: './applicant-resume.component.scss'
})
export class ApplicantResumeComponent {
  private readonly fb = inject(FormBuilder);

  resumeform: FormGroup;
  closed = output<boolean>()

  constructor() {
    const fb = this.fb;

    this.resumeform = createFormWithModel<Resume>(
      fb,
      resumeDefault,
    )
  }

  closeModal(){
    this.closed.emit(false)
  }

  onSave(){
    if(this.resumeform.valid){

    }else{
      this.resumeform.markAllAsTouched()
    }
  }
}

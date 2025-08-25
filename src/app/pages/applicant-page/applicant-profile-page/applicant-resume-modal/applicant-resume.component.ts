import { Component, EventEmitter, output, Output, inject } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {createFormWithModel} from '../../../../custom/createformwithmodel';
import {Resume, resumeDefault} from './resume_entity/resume_entity';
import {NgOptimizedImage} from '@angular/common';
import {SelectableGridComponent} from '../../../../custom/SelectableGridComponent';

@Component({
  selector: 'app-applicant-resume',
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage,
    SelectableGridComponent
  ],
  templateUrl: './applicant-resume.component.html',
  styleUrl: './applicant-resume.component.scss'
})
export class ApplicantResumeComponent {
  private readonly fb = inject(FormBuilder);

  cities: string[];
  studies: string[];

  resumeform: FormGroup;
  closed = output<boolean>()

  constructor() {
    const fb = this.fb;

    this.resumeform = createFormWithModel<Resume>(
      fb,
      resumeDefault,
    )

    this.cities = ["Almaty", "Astana", "Aqtau"]
    this.studies = ["Software Development", "Data Science"]
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

  onLanguagesChange($event: string[]) {
    console.log($event)
  }
}

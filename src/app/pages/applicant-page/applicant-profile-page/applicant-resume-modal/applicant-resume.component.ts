import {Component, output, inject } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {createFormWithModel} from '../../../../custom/createformwithmodel';
import {Resume, resumeDefault} from './resume_entity/resume_entity';
import {NgOptimizedImage} from '@angular/common';
import {Select} from 'primeng/select';
import {MultiSelect} from 'primeng/multiselect';

interface City {
  name: string;
  code: string;
}

interface Study{
  name: string;
}

interface Language{
  name: string;
}

@Component({
  selector: 'app-applicant-resume',
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage,
    Select,
    MultiSelect,
  ],
  templateUrl: './applicant-resume.component.html',
  styleUrl: './applicant-resume.component.scss'
})
export class ApplicantResumeComponent {
  private readonly fb = inject(FormBuilder);

  cities: City[] | undefined;
  studies: Study[] | undefined;
  languages: Language[] | undefined;


  resumeform: FormGroup;

  closed = output<boolean>()


  constructor() {
    const fb = this.fb;

    this.resumeform = createFormWithModel<Resume>(
      fb,
      resumeDefault,
      {name: [Validators.required],
        surname: [Validators.required]
      },
    )

    this.languages = [{name: "Eng"},{name:"Kz"},{name:"Rus"}]

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.studies = [{name: "soft"}, {name: "design"}]
  }

  closeModal(){
    this.closed.emit(false)
  }

  onSave() {
    if (this.resumeform.valid) {
      const data: Resume = this.resumeform.value;
      console.log('Форма отправлена:', data);
    } else {
      this.resumeform.markAllAsTouched();
    }
  }
}

import {Component, output, inject } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {createFormWithModel} from '../../../../custom/createformwithmodel';
import {Resume, resumeDefault} from './resume_entity/resume_entity';
import {Select} from 'primeng/select';
import {MultiSelect} from 'primeng/multiselect';
import {Button} from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import {MessageService} from 'primeng/api';
import {CustomFileUpload} from '../../../../custom/customfileupload';

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
    Select,
    MultiSelect,
    Button,
    ButtonModule,
    CustomFileUpload,
  ],
  providers: [MessageService],
  templateUrl: './applicant-resume.component.html',
  styleUrl: './applicant-resume.component.scss'
})
export class ApplicantResumeComponent {
  private readonly fb = inject(FormBuilder);
  private readonly ms = inject(MessageService)

  cities: City[] | undefined;
  studies: Study[] | undefined;
  languages: Language[] | undefined;


  resumeform: FormGroup;

  closed = output<boolean>()
  protected previewImage: string | undefined;
  imageSrc: string | undefined;


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

  choose($event: MouseEvent, chooseCallback: any) {

  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = e => this.imageSrc = e.target?.result as string;
    reader.readAsDataURL(file);
  }
}

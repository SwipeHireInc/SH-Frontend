import {Component, output, inject } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Resume, resumeDefault} from './resume_entity/resume_entity';
import {Select} from 'primeng/select';
import {MultiSelect} from 'primeng/multiselect';
import {Button} from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import {MessageService} from 'primeng/api';
import {CustomFileUpload} from '../../../../custom/customfileupload';
import {cities, City} from '../../../../formdata/cities';
import {NgOptimizedImage} from '@angular/common';
import {languages, Languages} from '../../../../formdata/languages';
import {Skill, skills} from '../../../../formdata/skills';
import {studies, Study} from '../../../../formdata/studies';

@Component({
  selector: 'app-applicant-resume',
  imports: [
    ReactiveFormsModule,
    Select,
    MultiSelect,
    Button,
    ButtonModule,
    CustomFileUpload,
    NgOptimizedImage,
  ],
  providers: [MessageService],
  templateUrl: './applicant-resume.component.html',
  styleUrl: './applicant-resume.component.scss'
})
export class ApplicantResumeComponent {
  private readonly fb = inject(FormBuilder);
  protected readonly resume_form: FormGroup;
  protected readonly cities: City[] = cities;
  protected readonly languages: Languages[] = languages;
  protected readonly studies: Study[] = studies;
  protected readonly skills: Skill[] = skills;



  closed = output<boolean>()
  imageSrc: string | undefined;

  constructor() {
    this.resume_form = this.fb.group({
      name: ['', Validators.required],
    })
  }

  closeModal(){
    this.closed.emit(false)
  }

  onSave() {
    if (this.resume_form.valid) {
      const data: Resume = this.resume_form.value;
      console.log("form: ", data);
    } else {
      this.resume_form.markAllAsTouched();
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

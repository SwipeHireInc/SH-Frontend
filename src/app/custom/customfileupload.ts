import {Component, ViewEncapsulation} from '@angular/core';
import {FileSelectEvent, FileUpload} from 'primeng/fileupload';
import {Button} from 'primeng/button';


@Component({
  selector: 'app-upload-file',
  imports: [
    FileUpload,
    Button
  ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <p-fileupload
      name="myfile[]"
      url="https://www.primefaces.org/cdn/api/upload.php"
      [multiple]="true"
      accept="image/*"
      maxFileSize="1000000"
      (onUpload)="onTemplatedUpload()"
      (onSelect)="onSelectedFiles($event)"
    >

      <ng-template #header let-files let-chooseCallback="chooseCallback" let-clearCallback="clearCallback"
                   let-uploadCallback="uploadCallback">
        <div class="flex justify-center items-center w-full">
          <p-button
            (onClick)="choose($event, chooseCallback)"
            (click)="existFile(true)"
            icon="pi pi-cloud-upload"
            [rounded]="true"
            [outlined]="true"/>
        </div>
      </ng-template>

      <ng-template #empty>
        <div class="flex items-center justify-center flex-col rounded-md p-6">
          <p class="mt-6 mb-0 text-center">Drag Your Resume here</p>
        </div>
      </ng-template>


      @if(exfile == true){
        <ng-template let-file pTemplate="content">
          <div class="flex flex-wrap gap-4">
            <div>
              <img role="presentation" [alt]="file.name" [src]="file.objectURL" width="100" height="50" />
            </div>
            <p-button icon="pi pi-times" (click)="existFile(false)" [outlined]="true" [rounded]="true" severity="danger" />
          </div>
        </ng-template>
      }


    </p-fileupload>
  `,
  styles: [`
    .p-fileupload-content {
      padding: 21px;
    }
  `]
})

export class CustomFileUpload{
  exfile: boolean | undefined;

  existFile($event: boolean){
    this.exfile = $event
  }

  onTemplatedUpload() {

  }

  onSelectedFiles($event: FileSelectEvent) {

  }

  choose(_event: MouseEvent, chooseCallback: () => void) {
    chooseCallback();
  }
}

import { Component, ChangeDetectorRef, NgZone, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Jobs } from '../model/job_model';
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [NgOptimizedImage, CdkDrag],
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.scss'],
})
export class JobsPageComponent {
  protected zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  protected readonly Jobs = Jobs;
  currjob = 0;
  private readonly THRESHOLD = 120;

  onDragEnded(event: CdkDragEnd) {
    const x = event.distance.x;

    if (x > this.THRESHOLD || x < -this.THRESHOLD) {
      const direction = x > 0 ? '100vw' : '-100vw';
      event.source.element.nativeElement.style.transform = `translateX(${direction})`;
      event.source.element.nativeElement.style.transition = 'transform 0.3s ease-out';

      setTimeout(() => {
        this.zone.run(() => this.goNext());
        this.cdr.detectChanges();
      }, 300);
    } else {
      event.source.reset();
    }
  }

  private goNext() {
    if (this.currjob < this.Jobs.length - 1) {
      this.currjob++;
    } else {
    }
  }
}

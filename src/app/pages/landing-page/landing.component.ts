import {AfterViewInit, ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {AuthModalComponent} from '../../shared/components/auth-modal/auth-modal.component';
import {CommonModule} from '@angular/common';
import {changeTitleAnimated} from './landing.animation';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, AuthModalComponent],
  providers: [DialogService],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit, AfterViewInit {
  dialogService = inject(DialogService)
  // Title
  titlePrimary = signal("SH")
  // Signals
  isModalOpen = signal(false);
  lastScrollTop = 0;
  isHeaderVisible: WritableSignal<boolean> = signal(true);
  ref: DynamicDialogRef | undefined;

  show() {
    this.ref = this.dialogService.open(AuthModalComponent, { header: 'Sign Up',
      width: '400px',
      closable: true,
      dismissableMask: true,
      modal: true,
      styleClass: 'auth-dialog',
      data: { from: 'landing' }});
  }

  ngOnInit(){
  }

  ngAfterViewInit() {
    changeTitleAnimated(this.titlePrimary)
  }

  toggleModal(e: boolean) {
    this.isModalOpen.set(e)
  }
}

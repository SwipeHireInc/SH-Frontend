import { Directive, EventEmitter, HostListener, Output, Renderer2, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appSwipeCard]',
  standalone: true,
})
export class SwipeCardDirective {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @Output() swipeLeft = new EventEmitter<void>();
  @Output() swipeRight = new EventEmitter<void>();

  @HostListener('swipeleft', ['$event'])
  onSwipeLeft() {
    this.animateSwipe(-300);
    setTimeout(() => this.swipeLeft.emit(), 300);
  }

  @HostListener('swiperight', ['$event'])
  onSwipeRight() {
    this.animateSwipe(300);
    setTimeout(() => this.swipeRight.emit(), 300);
  }

  animateSwipe(offsetX: number) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease');
    this.renderer.setStyle(this.el.nativeElement, 'transform', `translateX(${offsetX}px)`);
  }

  //
}

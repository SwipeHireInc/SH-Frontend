import {Directive, Renderer2, ElementRef, inject, output} from '@angular/core';

@Directive({
  selector: '[appSwipeCard]',
  standalone: true,
  host:{
    "(swipeleft)": "onSwipeLeft()",
    "(swiperight)": "onSwipeRight()"
  }
})
export class SwipeCardDirective {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  swipeLeft = output<void>();
  swipeRight = output<void>();

  onSwipeLeft() {
    this.animateSwipe(-300);
    setTimeout(() => this.swipeLeft.emit(), 300);
  }

  onSwipeRight() {
    this.animateSwipe(300);
    setTimeout(() => this.swipeRight.emit(), 300);
  }

  animateSwipe(offsetX: number) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease');
    this.renderer.setStyle(this.el.nativeElement, 'transform', `translateX(${offsetX}px)`);
  }

}

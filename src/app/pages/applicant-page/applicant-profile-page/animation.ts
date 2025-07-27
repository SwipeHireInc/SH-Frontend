import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector:'[appUnderLineAnimation]',
  standalone: true,
})

export class UnderLineAnimation{
  @Input('appUnderLineAnimation') underline!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {
  }

  @HostListener("mouseleave")
  onleave() {
    this.renderer.setStyle(this.underline.nativeElement, "margin-left", "0px")
  }

  @HostListener("mouseenter")
  onmove() {
    this.renderer.setStyle(this.underline.nativeElement, "margin-left", "110px")
  }
}

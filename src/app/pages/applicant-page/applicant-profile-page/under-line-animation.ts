import { Directive, ElementRef, HostListener, Input, Renderer2, ViewChild, inject } from '@angular/core';

@Directive({
  selector:'[appUnderLineAnimation]',
  standalone: true,
  host:{
  "(mouseleave)": "onleave()",
    "(mouseenter)":"onmove()"
  }
})

export class UnderLineAnimation{
  private renderer = inject(Renderer2);

  @Input('appUnderLineAnimation') underline!: HTMLDivElement;

  onleave() {
    this.renderer.setStyle(this.underline, "margin-left", "0px")
  }

  onmove() {
    this.renderer.setStyle(this.underline, "margin-left", "110px")
  }
}

import { Directive, ElementRef, HostListener, Input, Renderer2, ViewChild, inject } from '@angular/core';

@Directive({
  selector:'[appUnderLineAnimation]',
  standalone: true,
})

export class UnderLineAnimation{
  private renderer = inject(Renderer2);

  @Input('appUnderLineAnimation') underline!: HTMLDivElement;

  @HostListener("mouseleave")
  onleave() {
    this.renderer.setStyle(this.underline, "margin-left", "0px")
  }

  @HostListener("mouseenter")
  onmove() {
    this.renderer.setStyle(this.underline, "margin-left", "110px")
  }

  //name
  //surname
  //age
  //height
  //image
  //phone number
  //location
  //languages
  //Skills
  //Experience
  //study
  //habits

  //+
  //



}

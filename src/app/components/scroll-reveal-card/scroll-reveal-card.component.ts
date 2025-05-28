import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-reveal-card',
  imports: [],
  templateUrl: './scroll-reveal-card.component.html',
  styleUrl: './scroll-reveal-card.component.scss'
})
export class ScrollRevealCardComponent {
  @ViewChild("card", {static: true }) cardRef!: ElementRef;

ngOnInit() {
  const card = this.cardRef.nativeElement;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: 'top center+=100',
      end: '+=1000',
      scrub: true,
    },
  });

  // 10 steps of animation
  for (let i = 0; i < 10; i++) {
    tl.to(card, {
      y: 200 - i * 20,               // 200 → 0
      opacity: i / 10,               // 0 → 1
      scale: 0.8 + (i * 0.02),       // 0.8 → 1.0
      duration: 0.1,
    });
  }
}
}

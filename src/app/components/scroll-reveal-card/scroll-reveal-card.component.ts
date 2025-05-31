import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-scroll-reveal-card',
  imports: [],
  templateUrl: './scroll-reveal-card.component.html',
  styleUrl: './scroll-reveal-card.component.scss'
})
export class ScrollRevealCardComponent implements AfterViewInit {
  @ViewChild('card', { static: true }) cardRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const card = this.cardRef.nativeElement;

    // Заблокировать скролл
    this.renderer.setStyle(document.body, 'overflow', 'hidden');

    // Отслеживаем скролл
    window.addEventListener('wheel', (e) => {
      e.preventDefault();

      // Двигаем карту вверх
      gsap.to(card, {
        y: '0%',
        ease: 'power1.inOut',
        duration: 1,
        onComplete: () => {
          this.renderer.removeStyle(document.body, 'overflow');
        }
      });
    }, { passive: false });
  }
}
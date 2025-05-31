import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger); 

    gsap.fromTo('.card', 
      {
         y: '-300%', 
      },
      { 
        y: '-50%',
        scrollTrigger: {
          trigger: '.scroll-helper',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1.5,
          pin: '.portal-section'
        }
      }
    );
  }
}
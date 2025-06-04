import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PortalAnimation } from './scroll-reveal-card.animation';

@Component({
  selector: 'app-scroll-reveal-card',
  imports: [],
  templateUrl: './scroll-reveal-card.component.html',
  styleUrl: './scroll-reveal-card.component.scss'
})
export class ScrollRevealCardComponent{
  @ViewChild('card', { static: true }) cardRef!: ElementRef;

  // ngAfterViewInit(): void {
  //   PortalAnimation()
  // }
}
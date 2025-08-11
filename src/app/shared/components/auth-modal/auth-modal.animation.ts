import { ElementRef, EventEmitter } from "@angular/core";
import gsap from "gsap";


export function animateOpen(modalOverlay: ElementRef, modalContent: ElementRef) {
    gsap.fromTo(modalOverlay.nativeElement,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    gsap.fromTo(modalContent.nativeElement,
      { opacity: 0, scale: 0.9, y: -30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  }

export function animateClose(
    modalOverlay: ElementRef,
    modalContent: ElementRef,
    emitCallback: () => void)
    {
    gsap.to(modalContent.nativeElement, {
      opacity: 0, scale: 0.9, y: -30, duration: 0.2, ease: "power2.in",
      onComplete: emitCallback
    });

    gsap.to(modalOverlay.nativeElement, { opacity: 0, duration: 0.2 });
}

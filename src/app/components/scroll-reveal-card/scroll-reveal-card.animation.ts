import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export function PortalAnimation(){
    
        gsap.registerPlugin(ScrollTrigger); 
      
        gsap.fromTo('.portal-container', 
            { height: '2px' },
            { 
              height: '410px',
              scrollTrigger: {
                trigger: '.scroll-helper',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 1.5
                // Убираем pin: '.portal-section' ← ЭТО УБРАТЬ
              }
            }
          );
} 
import { WritableSignal } from "@angular/core";
import gsap from "gsap";

// This function registers a scroll event listener that toggles the visibility of a header based on the scroll position.
export function registerScrollAnimation(
    isHeaderVisible: WritableSignal<boolean>,
    getlastScrollTop: () => number,
    setlastScrollTop: (value: number) => void
){
    const OnScroll = () => {
        const scrollTop = window.scrollY;
        isHeaderVisible.set(scrollTop < getlastScrollTop());
        setlastScrollTop(scrollTop);
    }

    window.addEventListener('scroll', OnScroll);

    window.addEventListener("beforeunload", () => {
        window.removeEventListener('scroll', OnScroll);
    });
}

// Text animation function

// export function animateTitle(){
//   gsap.fromTo("#txt",
//     { opacity: 0, y: 20 },
//     { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//   );
// }

export function animateTitleRest() {
  const el = document.getElementById("txt")!;
  if (!el) return;

  const base = "SH";
  // right of SH
  const steps = ["", "w", "wi", "wip", "wipe"];

  const suffixes = ["", "Hi", "Hir", "Hire", "eHire"];

  // SH
  // SwHi  = SH + w + Hi
  // SwiHir = SH + wi + Hir
  // SwipHire = SH + wip + Hire
  // SwipeHire = SH + wipe + eHire

  let index = 0;

  function next() {
    if (index >= steps.length) return;

    const text = base + steps[index] + suffixes[index];
    el.textContent = text;

    gsap.fromTo(el,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          index++;
          setTimeout(() => {
            if (index < steps.length) {
              gsap.to(el, {
                opacity: 0,
                y: -10,
                duration: 0.3,
                ease: "power1.in",
                onComplete: next
              });
            }
          }, 700);
        }
      }
    );
  }

  next();
}
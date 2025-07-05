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

// animation title function
export function changeTitleAnimated(signal: WritableSignal<string>) {
    const steps = ["SwHi", "SwiHir", "SwipHire", "SwipeHire"];
    let i = 0;

    const interval = setInterval(() => {
      if (i < steps.length) {
        signal.set(steps[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);

  }


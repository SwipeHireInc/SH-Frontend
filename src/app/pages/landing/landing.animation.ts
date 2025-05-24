import { WritableSignal } from "@angular/core";


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

export function animateTitle(){
    gsap.to(".txt", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
    })
}
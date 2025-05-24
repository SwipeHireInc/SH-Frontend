import { WritableSignal } from "@angular/core";


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


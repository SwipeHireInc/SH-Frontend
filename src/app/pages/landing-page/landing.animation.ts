import { WritableSignal } from "@angular/core";

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


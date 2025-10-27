import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormUtilsService {
  markAllAsTouched(form: FormGroup): void {
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markAllAsTouched(control as FormGroup);
      }
    });
  }

  isInvalid(form: FormGroup, control: string): boolean {
    const ctrl = form.get(control);
    return !!ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched);
  }

  reset(form: FormGroup, values: Record<string, any> = {}): void {
    form.reset(values);
  }
}

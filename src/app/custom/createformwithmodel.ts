import {FormBuilder, FormControl, FormGroup, ValidatorFn} from '@angular/forms';

type ValidatorsMap<T> = {
  [K in keyof T]?: ValidatorFn | ValidatorFn[];
};

export function createFormWithModel<T extends object>(
  fb: FormBuilder,
  model: T,
  validatorsMap?: ValidatorsMap<T>
): FormGroup {
  const group: { [K in keyof T]: FormControl } = {} as any;

  for (const key in model) {
    if (Object.prototype.hasOwnProperty.call(model, key)) {
      const validators = validatorsMap?.[key] ?? [];
      group[key] = new FormControl(model[key], validators);
    }
  }

  return fb.group(group);
}

import {FormBuilder, FormControl, FormGroup, ValidatorFn} from '@angular/forms';

type ValidatorsMap<T> = {
  [K in keyof T]?: ValidatorFn | ValidatorFn[];
};

type TypedFormGroup<T> = FormGroup & {
  controls: { [K in keyof T]: FormControl };
  getters: { [K in keyof T]: () => FormControl };
};

export function createFormWithModel<T extends object>(
  fb: FormBuilder,
  model: T,
  validatorsMap?: ValidatorsMap<T>
): TypedFormGroup<T> {
  const group: { [K in keyof T]: FormControl } = {} as any;
  const getters: any = {};

  for (const key in model) {
    if (Object.prototype.hasOwnProperty.call(model, key)) {
      const validators = validatorsMap?.[key] ?? [];
      group[key] = new FormControl(model[key], validators);

      getters[key] = () => group[key];
    }
  }

  const form = fb.group(group) as TypedFormGroup<T>;
  form.getters = getters;

  return form;
}

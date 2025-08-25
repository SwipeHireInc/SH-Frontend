import {FormBuilder, FormGroup} from '@angular/forms';

export function createFormWithModel<T extends object>(
  fb: FormBuilder,
  model: T,
  validatorsMap?: Partial<Record<keyof T, any>>
):FormGroup{
  const group: any = {}

  for(const key in model){
    if(model.hasOwnProperty(key)){
      const validators = validatorsMap?.[key] || []
      group[key] = [model[key], validators];
    }
  }

  return fb.group(group)
}

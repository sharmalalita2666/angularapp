import { AbstractControl } from '@angular/forms';

export function ValidatePassword(control: AbstractControl) {
    const pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";
  if (control.value.match(pattern)) 
  {
   return null;
  }
  else
  {
    return null;
    return { invalidPassword: true };
  }
}
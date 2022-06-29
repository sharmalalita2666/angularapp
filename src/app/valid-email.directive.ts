import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidEmail]'
})
export class ValidEmailDirective implements Validator {
  constructor() { }
  
  validate(control: AbstractControl): {[key:string]:any} | null {

    const pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/";

    if(control.value.match(pattern))
    {
      console.log("valid")
      return null
    }
    else
    {
      console.log("not")
      return {"validEmail":false}
    }
    throw new Error('Method not implemented.');
  };

}

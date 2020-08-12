import { FormGroup, AbstractControl } from '@angular/forms';

export default abstract class MotherForm {

    form: FormGroup;
  
    constructor(){
      this.form = this.initializeForm();
    }

    initializeForm(): FormGroup {
      return new FormGroup({})
    }
  
    addControlGroup(name: string, formGroup: AbstractControl): void {
      this.form.addControl(name, formGroup);
    }
    
    removeControlGroup(name: string){
      this.form.removeControl(name);
    }
}
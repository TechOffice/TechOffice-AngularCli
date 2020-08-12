import { OnInit, OnDestroy, Input, Host } from "@angular/core";
import { FormGroup } from '@angular/forms';
import MotherForm from './mother-form';

export default abstract class ChildrenForm implements OnInit, OnDestroy {

    @Input()
    intialValue: any
    form: FormGroup
  
    constructor(@Host() private _motherForm: MotherForm){
      this.form = this.initializeForm();
    }
  
    initializeForm() : FormGroup{
      return new FormGroup({});
    }
  
    getFormName(): string {
      return 'emptyForm'
    }
  
    ngOnInit(){
      if (this.intialValue){
        this.form.setValue(this.intialValue);
      }
      this._motherForm.addControlGroup(this.getFormName(), this.form);
    }
  
  
    ngOnDestroy(){
      this._motherForm.removeControlGroup(this.getFormName());
    }
  }
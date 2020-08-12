import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Host, ChangeDetectionStrategy } from '@angular/core';
import ChildrenForm from '../children-form';
import { SelfRegisterComponent } from '../self-register.component';

@Component({
  selector: 'app-self-register-children1',
  templateUrl: './self-register-children1.component.html',
  styleUrls: ['./self-register-children1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelfRegisterChildren1Component extends ChildrenForm  {

  title: string = "Hello";

  constructor(@Host() _motherForm: SelfRegisterComponent) {
    super(_motherForm);
  }

  initializeForm(): FormGroup{
    return new FormGroup({
      name: new FormControl('')
    })
  }

  getFormName(): string {
    return "selfRegisterChildren1";
  }

  changeTitle(){
    this.title = "Hello World";
  }

}

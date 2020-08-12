import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import MotherForm from './mother-form';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-self-register',
  templateUrl: './self-register.component.html',
  styleUrls: ['./self-register.component.css']
})
export class SelfRegisterComponent extends MotherForm {

  constructor() {
    super();
  }

  initializeForm(): FormGroup{
    return new FormGroup({
      name: new FormControl('')
    })
  }


}

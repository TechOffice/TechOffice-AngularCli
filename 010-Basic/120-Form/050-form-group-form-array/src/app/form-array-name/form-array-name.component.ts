import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-name',
  templateUrl: './form-array-name.component.html',
  styleUrls: ['./form-array-name.component.css']
})
export class FormArrayNameComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(''),
      addresses: new FormArray([
          new FormControl('address1'),
          new FormControl('address2'),
          new FormControl('address3')
      ])
    });
  }

  ngOnInit() {
  }

}

import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-array-form-group',
  templateUrl: './form-array-form-group.component.html',
  styleUrls: ['./form-array-form-group.component.css']
})
export class FormArrayFormGroupComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(''),
      addresses: new FormArray([
        new FormGroup({
          address: new FormControl('address1')
        }),
        new FormGroup({
          address: new FormControl('address2')
        }),
        new FormGroup({
          address: new FormControl('address3')
        })
      ])
    });
  }

  ngOnInit() {
  }

}

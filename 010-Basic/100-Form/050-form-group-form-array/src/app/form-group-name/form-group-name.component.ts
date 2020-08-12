import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group-name',
  templateUrl: './form-group-name.component.html',
  styleUrls: ['./form-group-name.component.css']
})
export class FormGroupNameComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form =  new FormGroup({
      name: new FormControl(''),
      address: new FormGroup({
        address1: new FormControl('')
      })
    });
  }

  ngOnInit() {
  }

}

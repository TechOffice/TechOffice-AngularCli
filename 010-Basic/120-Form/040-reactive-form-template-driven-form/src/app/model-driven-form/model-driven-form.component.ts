import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  form : FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      name: new FormControl('')
    })
  }

  ngOnInit() {
  }

}

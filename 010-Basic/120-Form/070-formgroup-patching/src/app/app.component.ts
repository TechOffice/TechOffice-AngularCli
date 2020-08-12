import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  counter: number = 0;
  form: FormGroup;

  constructor(private _formBuilder: FormBuilder){
    this.form = this._formBuilder.group({
      name: new FormControl('initial name')
    });
  }

  ngOnInit(){
    
  }

  addControl(){
    this.counter++;
    this.form.addControl('control' + this.counter, new FormControl(''));
  }

  patchValue(){
    this.form.patchValue({
      name: 'patched name1',
      control1: 'patched control1',
      control2: 'patched control2',
      control3: 'patched control3',
      control4: 'patched control4',
      control5: 'patched control5',
    })
  }

  setValue(){
    this.form.setValue({
      name: 'patched name1',
      control1: 'patched control1',
      control2: 'patched control2',
      control3: 'patched control3',
      control4: 'patched control4',
      control5: 'patched control5',
    })
  }
}

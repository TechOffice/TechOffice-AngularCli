import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { InitialStylingValuesIndex } from '@angular/core/src/render3/interfaces/styling';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input()
  initialValue;

  defaultInitialValue = {name: 'abc'}; 

  @Output()
  valueChange = new EventEmitter();

  form: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      name: new FormControl('abc')
    })
    if (this.initialValue){
      this.form.patchValue(this.initialValue);
    }else {
      this.form.patchValue(this.defaultInitialValue);
    }
  }

  onSubmit(){
    this.valueChange.emit(this.form.value);
    this.form.reset();
  }

  onReset(){
    if (this.initialValue){
      this.form.patchValue(this.initialValue);
    }else {
      this.form.patchValue(this.defaultInitialValue);
    }
  }
}

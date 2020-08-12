import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  counter: any = {number: 1}

  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      name: new FormControl()
    })
  }

  ngOnInit() {

  }

  update(){
    this.counter.number++;
  }

}

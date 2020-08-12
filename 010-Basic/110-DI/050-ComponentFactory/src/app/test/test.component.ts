import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  formdata: FormGroup;

  constructor() {
    this.formdata = new FormGroup({
      name: new FormControl()
    });
  }

  ngOnInit() {
  }

}

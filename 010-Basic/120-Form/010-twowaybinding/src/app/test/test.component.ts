import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input()
  counter: number

  @Output()
  counterChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update(){
    this.counter = this.counter + 1;
    this.counterChange.emit(this.counter); 
  }

}

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges {

  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges){
    console.log("change");
    console.log(change);
  }

}

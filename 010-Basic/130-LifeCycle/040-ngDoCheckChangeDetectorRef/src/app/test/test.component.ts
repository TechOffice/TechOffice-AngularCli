import { Component, OnInit,  Input, SimpleChanges, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges, DoCheck{

  @Input()
  name: string;
  logs: string[] = [];
  counter: number = 0;

  constructor() {
    setInterval(()=>{
      this.counter = this.counter + 1;
    }, 1000);
  }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges){
    this.logs.push('ogOnChange in the test component')
  }

  ngDoCheck(){
    console.log('ngDoCheck in the test component');
    this.logs.push('ngDoCheck in the test component')
  }



}

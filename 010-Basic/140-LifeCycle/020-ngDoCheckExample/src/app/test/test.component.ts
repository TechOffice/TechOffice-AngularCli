import { Component, OnInit, DoCheck, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  name: string;
  logs: string[] = []; 

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges){
    this.logs.push("ngOnChange");
  }

  ngDoCheck(){
    this.logs.push('ngDoCheck');
  }
}

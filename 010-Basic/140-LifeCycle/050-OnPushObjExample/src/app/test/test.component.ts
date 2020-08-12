import { Component, OnInit,  Input, SimpleChanges, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  @Input()
  name: {name: string};
  logs: string[] = [];
  counter: number = 0;

  constructor() {
    setInterval(()=>{
      this.counter = this.counter + 1;
    }, 1000);
  }

  ngOnInit() {
  }

  get runChangeDetection() {
    this.logs.push('Checking the view in test component');
    return true;
  }

}

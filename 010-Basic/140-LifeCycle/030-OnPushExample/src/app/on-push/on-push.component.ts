import { Component, OnInit, ChangeDetectionStrategy, Input, DoCheck, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit{

  @Input()
  name: string;
  logs: string[] = [];
  counter: number = 0;

  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.counter = this.counter + 1;
    }, 1000);
  }


  get runChangeDetection() {
    this.logs.push('Checking the view in test component');
    return true;
  }

}

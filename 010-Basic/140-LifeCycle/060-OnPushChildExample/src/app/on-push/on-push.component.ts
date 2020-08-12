import { Component, OnInit, ChangeDetectionStrategy, Input, DoCheck, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {

  counter: number = 0;
  
  doSomething(){
    this.counter = this.counter + 1;
  }
  

}

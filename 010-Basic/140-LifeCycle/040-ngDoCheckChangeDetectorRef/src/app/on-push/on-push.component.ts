import { Component, OnInit, ChangeDetectionStrategy, Input, DoCheck, OnChanges, SimpleChange, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  name: string;
  logs: string[] = [];
  counter: number = 0;
  
  private _counter: number = 0;

  constructor(private _changeRef: ChangeDetectorRef) { }

  ngOnInit() {
    setInterval(()=>{
      this.counter = this.counter + 1;
    }, 5000);
  }

  ngOnChanges(change: SimpleChanges){
    this.logs.push('ogOnChange in the on push component')
  }

  ngDoCheck(){
    console.log('ngDoCheck in the on push component');
    this.logs.push('ngDoCheck in the on push component')

    if (this._counter !== this.counter){
      this._counter = this.counter;
      this._changeRef.detectChanges();
      console.log('run detect change in the on push component');
      this.logs.push('run detect change in the on push component')
    }

  }



}

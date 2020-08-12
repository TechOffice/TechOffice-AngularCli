import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-testchildchild',
  templateUrl: './testchildchild.component.html',
  styleUrls: ['./testchildchild.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestchildchildComponent implements OnInit {

  constructor(private changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  countNumber = 0;

  count(){
    this.countNumber = this.countNumber + 1;
    return this.countNumber;
  }

  action(){}

  detectChange(){
    this.changeDetectionRef.detectChanges();
  }

}

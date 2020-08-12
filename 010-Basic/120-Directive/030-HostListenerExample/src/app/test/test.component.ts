import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ContextService } from '../context.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  outputValue: string;

  constructor(
    private contextService: ContextService
  ) { }

  ngOnInit() {
  }

  countNumber = 0;

  count(){
    this.countNumber = this.countNumber + 1;
    return this.countNumber;
  }

  action(){}

  passOutput(){
    this.contextService.nextInput(this.outputValue);
  }

}

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { ContextService } from 'src/app/context.service';

@Component({
  selector: 'app-techchild',
  templateUrl: './techchild.component.html',
  styleUrls: ['./techchild.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechchildComponent implements OnInit {

  @Input()
  inputValue: string;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private contextService: ContextService
  ) { }

  ngOnInit() {
    this.contextService.getInputSubjectObservable().pipe(

    ).subscribe(
      (val: string) => {
        this.inputValue = val;
        this.changeDetectorRef.detectChanges();
      }
    )
  }

  countNumber = 0;

  count(){
    this.countNumber = this.countNumber + 1;
    return this.countNumber;
  }

  action(){}

  detectChanges(){
    this.changeDetectorRef.detectChanges();
  }
}

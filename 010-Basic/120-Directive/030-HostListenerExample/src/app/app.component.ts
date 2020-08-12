import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-workspace';

  countNumber = 0;

  count(){
    this.countNumber = this.countNumber + 1;
    return this.countNumber;
  }

  action(){}
}

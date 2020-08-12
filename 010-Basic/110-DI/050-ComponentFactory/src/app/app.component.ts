import { TestService } from './test.service';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  title = 'angular-workspace';

  constructor(private _testService: TestService,
    private viewContainerRef: ViewContainerRef){
    this.title = _testService.name;
  }

  doSomething(){
    alert(this._testService.getExpectedTestComponentValue(this.viewContainerRef));
  }


}

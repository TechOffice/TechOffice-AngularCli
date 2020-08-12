import { Component } from '@angular/core';
import { TestService } from './test/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-workspace';

  name: string;

  constructor(private _testService: TestService) {
      _testService.getNameObservable().subscribe((name)=>{
        this.name = name;
      })
  }
  
  updated(){
    this._testService.nameUpdate("testing");
  }
  
}

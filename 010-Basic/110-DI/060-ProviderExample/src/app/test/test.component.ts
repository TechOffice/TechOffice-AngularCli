import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [TestService]
})
export class TestComponent implements OnInit {

  name: string;

  constructor(private _testService: TestService) {
      _testService.getNameObservable().subscribe((name)=>{
        this.name = name;
      })
  }

  ngOnInit() {
  }

  updated(){
    this._testService.nameUpdate("testing");
  }
}

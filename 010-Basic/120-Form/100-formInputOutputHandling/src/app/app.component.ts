import { Component, ViewChild } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(TestComponent) TestComponent: TestComponent;


  value

  onValueChange(value){
    this.value = value;
  } 

  editChildForm(){
    this.TestComponent.onReset();
  }
}

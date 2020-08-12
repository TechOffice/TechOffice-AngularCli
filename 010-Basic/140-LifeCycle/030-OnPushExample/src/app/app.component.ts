import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'name1';
  title = 'angular-workspace';

  changeName(){
    this.name = "updated name";
  }
  
  doSomething(){
    
  }
}

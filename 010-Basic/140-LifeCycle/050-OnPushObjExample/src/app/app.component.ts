import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: {name: string} = {name: 'name1'};
  title = 'angular-workspace';

  changeName(){
    this.name.name = "updated name";
  }
  
  doSomething(){
    
  }
}

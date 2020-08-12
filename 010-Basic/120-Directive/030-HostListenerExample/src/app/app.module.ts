import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDirective } from './test/test.directive';
import { TestComponent } from './test/test.component';
import { TechchildComponent } from './test/techchild/techchild.component';
import { TestchildchildComponent } from './test/testchild/testchildchild/testchildchild.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    TestComponent,
    TechchildComponent,
    TestchildchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, TechchildComponent]
})
export class AppModule { }

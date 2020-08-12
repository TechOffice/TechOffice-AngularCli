import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupNameComponent } from './form-group-name/form-group-name.component';
import { FormArrayNameComponent } from './form-array-name/form-array-name.component';
import { FormArrayFormGroupComponent } from './form-array-form-group/form-array-form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    FormGroupNameComponent,
    FormArrayNameComponent,
    FormArrayFormGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

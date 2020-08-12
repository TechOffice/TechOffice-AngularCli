import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupNameComponent } from './form-group-name.component';

describe('FormGroupNameComponent', () => {
  let component: FormGroupNameComponent;
  let fixture: ComponentFixture<FormGroupNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

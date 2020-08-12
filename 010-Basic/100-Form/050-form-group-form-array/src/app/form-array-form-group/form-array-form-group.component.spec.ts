import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayFormGroupComponent } from './form-array-form-group.component';

describe('FormArrayFormGroupComponent', () => {
  let component: FormArrayFormGroupComponent;
  let fixture: ComponentFixture<FormArrayFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArrayFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

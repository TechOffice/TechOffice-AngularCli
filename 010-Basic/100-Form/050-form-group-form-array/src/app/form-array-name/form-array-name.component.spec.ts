import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayNameComponent } from './form-array-name.component';

describe('FormArrayNameComponent', () => {
  let component: FormArrayNameComponent;
  let fixture: ComponentFixture<FormArrayNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArrayNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

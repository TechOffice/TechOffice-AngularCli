import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfRegisterChildrenComponent } from './self-register-children.component';

describe('SelfRegisterChildrenComponent', () => {
  let component: SelfRegisterChildrenComponent;
  let fixture: ComponentFixture<SelfRegisterChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfRegisterChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfRegisterChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

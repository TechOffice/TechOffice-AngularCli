import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestchildchildComponent } from './testchildchild.component';

describe('TestchildchildComponent', () => {
  let component: TestchildchildComponent;
  let fixture: ComponentFixture<TestchildchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestchildchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestchildchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

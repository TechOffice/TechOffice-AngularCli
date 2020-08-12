import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechchildComponent } from './techchild.component';

describe('TechchildComponent', () => {
  let component: TechchildComponent;
  let fixture: ComponentFixture<TechchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

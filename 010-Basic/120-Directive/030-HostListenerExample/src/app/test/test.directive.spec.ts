import { TestDirective } from './test.directive';
import { TemplateRef, ViewContainerRef } from '@angular/core';

describe('TestDirective', () => {
  it('should create an instance', () => {
    const directive = new TestDirective();
    expect(directive).toBeTruthy();
  });
});

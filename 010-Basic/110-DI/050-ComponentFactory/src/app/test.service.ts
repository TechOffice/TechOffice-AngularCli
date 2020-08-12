import { Injectable, ComponentFactoryResolver, Injector, ComponentRef, ViewContainerRef } from '@angular/core';
import { TestComponent } from './test/test.component';

@Injectable()
export class TestService {

  name = "Testing";

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) { }

    
  getExpectedTestComponentValue(viewContainerRef: ViewContainerRef){
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TestComponent);
    let cmpRef:ComponentRef<TestComponent> = componentFactory.create(this.injector);
    cmpRef.changeDetectorRef.detectChanges();
    return cmpRef.instance.formdata.valid;
    // let cmpRef:ComponentRef<TestComponent> = viewContainerRef.createComponent(componentFactory);
    // cmpRef.changeDetectorRef.detectChanges();
    // return cmpRef.instance.formdata.valid;
  }
  
}

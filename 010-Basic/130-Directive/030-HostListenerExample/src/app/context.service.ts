import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  inputSubject: Subject<string> = new Subject<string>();

  constructor() { }

  nextInput(inputValue: string): void{
    this.inputSubject.next(inputValue);
  }

  getInputSubjectObservable(): Observable<string> {
    return this.inputSubject.asObservable();
  }
}

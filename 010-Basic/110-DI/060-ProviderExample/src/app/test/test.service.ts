import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _name: string;

  private _nameSubject = new Subject<string>();

  constructor() { }

  public getName(): string {
    return this._name;
  }

  public setName(name: string): void {
    this._name = name;
  }

  public getNameObservable(): Observable<string>{
    return this._nameSubject.asObservable();
  }

  public nameUpdate(name: string): void{
    this._nameSubject.next(name);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {
  private dataSource = new BehaviorSubject<T | null>(null);
  data = this.dataSource.asObservable();

  constructor() { }

  setData(data: T): void {
    this.dataSource.next(data);
  }

  getData(): T | null {
    return this.dataSource.getValue();
  }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {id: 1, name: 'Kartik', age: 24},
      {id: 2, name: 'Jinil', age: 22},
      {id: 3, name: 'Urvil', age: 22},
      {id: 4, name: 'Ravi', age: 23}
    ];
  }
}

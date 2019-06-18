import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [
    {id: 1, name: 'Kartik', age: 24},
    {id: 2, name: 'Jinil', age: 22},
    {id: 3, name: 'Urvil', age: 22},
    {id: 4, name: 'Ravi', age: 23}
  ];
  constructor() { }

  ngOnInit() {
  }

}

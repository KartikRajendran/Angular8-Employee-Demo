import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees = [];
  public errorMessage;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                 error => this.errorMessage);
  }

}

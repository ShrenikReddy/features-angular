import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees = [
    {empid:'101', empName:'EmpA', empDept: 'IT'},
    {empid:'102', empName:'EmpB', empDept: 'HR'},
    {empid:'103', empName:'EmpC', empDept: 'Finance'},
    {empid:'104',empName:'EmpD', empDept: 'Marketing'},
  ]
}

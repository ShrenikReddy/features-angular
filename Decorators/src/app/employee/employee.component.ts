import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
 
  employees = [
    {id:'101', name:'EmpA'},
    {id:'102', name:'EmpB'},
    {id:'103', name:'EmpC'},
    {id:'104', name:'EmpD'},
    {id:'105', name:'EmpE'},
  ];

  constructor(private router: Router){}

  navigateToDetail(empId: number, empName: string){
    this.router.navigate(['/employee-detail'], {
      queryParams: {id:empId, name: empName},
    });
  }
  
}

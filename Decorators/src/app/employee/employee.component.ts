import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  id: string = '';
  name: string = '';
  employees = [
    {id:'101', name:'EmpA'},
    {id:'102', name:'EmpB'},
    {id:'103', name:'EmpC'},
    {id:'104', name:'EmpD'},
    {id:'105', name:'EmpE'},
  ];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => 
    {
      this.id = params['id'];
      this.name = params['name'];
      console.log(params);
    })
  }
}

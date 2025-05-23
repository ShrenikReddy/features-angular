import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  employees = [
    {id:'101', name:'EmpA',},
    {id:'102', name:'EmpB', },
    {id:'103', name:'EmpC', },
    {id:'104', name:'EmpD', },
  ]
  id: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute) {
    const params = this.route.snapshot.params;
    this.id = params['id'];
    this.name = params['name'];
  }
}

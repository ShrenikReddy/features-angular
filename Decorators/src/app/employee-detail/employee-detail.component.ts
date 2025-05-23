import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  imports: [],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css',
})
export class EmployeeDetailComponent {
  id: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => 
    {
      this.id = params['id'];
      this.name = params['name'];
      console.log(params);
    });
  }
  backToEmployee(){
    this.router.navigate(['/employee']);
  }
}

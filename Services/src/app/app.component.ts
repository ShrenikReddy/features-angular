import { Component, InjectionToken } from '@angular/core';
// import { RouterLink,RouterOutlet } from '@angular/router';
import { FormControl, FormsModule, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule,FormGroup, FormControl, FormArray } from '@angular/forms';
// import { ProductsComponent } from './products/products.component';
// import { MyComponentComponent } from "./my-component/my-component.component";
// import { LogMessage1Service } from './services/log-message1.service';
// import { LogMessage2Service } from './log-message2.service';
// import { AlertMessage1Service } from './services/alert-message1.service';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule],
})
export class AppComponent {
 employeeForm: FormGroup

 constructor(){
  this.employeeForm = new FormGroup({
    employees: new FormArray([]),

 });
 }
 get employees(): FormArray {
  return this.employeeForm.get('employees') as FormArray;
 }
 
 addEmployee() {
  const employeeGroup = new FormControl({
    name: new FormControl('',Validators.required),
    job: new FormControl('',Validators.required),
  });
  this.employees.push(employeeGroup);

  submitForm(){
    if(this.employeeForm.invalid){
      return;
    }
    else{
      console.log(this.employeeForm.value);
    }
    }
  }
}

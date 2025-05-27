import { Component, InjectionToken } from '@angular/core';
// import { RouterLink,RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
// import { ProductsComponent } from './products/products.component';
// import { MyComponentComponent } from "./my-component/my-component.component";
// import { LogMessage1Service } from './services/log-message1.service';
// import { LogMessage2Service } from './log-message2.service';
// import { AlertMessage1Service } from './services/alert-message1.service';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule],
})
export class AppComponent {
  formSubmit(myForm: NgForm) {
    if (myForm.valid) {
      const formValues = JSON.stringify(myForm.value);
      console.log(formValues);
      console.log('%c Form submitted successfully', 'color:green');
    } else {
      alert('Please fill all the fields');
    }
  }
  resetValue(myForm: NgForm) {
    myForm.resetForm();
  }
  setDefault(myForm: NgForm) {
    myForm.resetForm({
      name: 'Default Name',
      email: 'defaultId@gmail.com',
    });
  }
}

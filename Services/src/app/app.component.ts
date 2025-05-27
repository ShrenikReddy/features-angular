import { Component, InjectionToken } from '@angular/core';
// import { RouterLink,RouterOutlet } from '@angular/router';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
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
  usernameControl = new FormControl('',[
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
    Validators.pattern('^[a-zA-Z]+$')
  ]);

  showValue(){
    console.log('Value:',this.usernameControl.value);
    console.log('Validation Status:', this.usernameControl.valid);
    console.log(this.usernameControl.errors);
  }

}

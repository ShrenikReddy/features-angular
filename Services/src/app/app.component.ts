import { Component, InjectionToken } from '@angular/core';
// import { RouterLink,RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormsModule, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule,FormGroup, FormControl, FormArray } from '@angular/forms';
import { urlValidator } from './custom-validators/url-validator';
import { AuthService } from './authentication/auth.service';
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
  providers: [AuthService],
})
export class AppComponent {
  
}

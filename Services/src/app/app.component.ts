import { Component, InjectionToken } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { MyComponentComponent } from "./my-component/my-component.component";
import { LogMessage1Service } from './services/log-message1.service';
import { LogMessage2Service } from './log-message2.service';
import { AlertMessage1Service } from './services/alert-message1.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterLink, ProductsComponent, MyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule]

  
})
export class AppComponent implments OnInit{
    user: { username: string} = { username:''};

    submitForm(myForm: NgForm) {
      if(myForm.valid){
        alert("S  ubmitted the form successfully, check console");
        console.log(this.user);
      }
    }
}


import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { MyComponentComponent } from "./my-component/my-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterLink, ProductsComponent, MyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Services';
}


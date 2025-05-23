import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
  { path: 'employee/:id', component: EmployeeComponent },
];

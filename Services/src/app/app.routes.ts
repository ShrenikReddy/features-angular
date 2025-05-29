import { Routes } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { AdminComponent } from './components/admin/admin.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

export const routes: Routes = [
    // { path: 'login', component: LoginComponent },
    // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }, 
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'first', component: FirstComponent, },
    { path: 'second', loadComponent() => import('./components/second/second.component').then(m => m.SecondComponent), }
];

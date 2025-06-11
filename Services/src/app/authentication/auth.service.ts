import { Injectable } from '@angular/core';
import { Password } from 'primeng/password';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  login(email: string; password: string): boolean{
    if(email !== '' && password !== ''){
      this.isLoggedIn = true;
      return true;
  }
    return false;
}
isLoggenInUser(): boolean{
  return this.isLoggedIn;
}
  
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertMessage2Service {
  showAlert(){
    alert('Hello from AlertMessage2Service');
  }
  
}

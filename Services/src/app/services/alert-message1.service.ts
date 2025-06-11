import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertMessage1Service {
  showAlert(){
    alert('First alert');
  }

 
}

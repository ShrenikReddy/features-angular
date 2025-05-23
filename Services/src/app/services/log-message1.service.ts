import { Injectable } from '@angular/core';

@Injectable({
  export class LogMessage1Service
})
export class LogMessage1Service {
  log(): void {
    console.log('This is a service 1');
  }
}

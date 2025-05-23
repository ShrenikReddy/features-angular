import { Injectable } from '@angular/core';

@Injectable({
  export class LogMessage2Service
})
export class LogMessage2Service {
log(): void {
    console.log('This is a service 2');
  }
}

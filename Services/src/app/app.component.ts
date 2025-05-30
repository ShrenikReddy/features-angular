import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent {
  constructor(){
    const observable$ = of({name: 'User', age: 27},
         [1,2,3,4], 
         () => 'Hello');
    observable$.subscribe(( val => console.log( val )));
  }
  }



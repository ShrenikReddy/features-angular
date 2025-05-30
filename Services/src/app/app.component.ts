import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { interval, timer} from "rxjs";
import { EMPTY } from "rxjs";
import { filter } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const num$ = from([1,2,3,4,5,6,7,8,9,10]);
    const $even = num$.pipe(filter((val) => val%2 == 0));

    console.log('Even Numbers:');
    $even.subscribe((res) => console.log(res));
    console.log('Odd Numbers:');
    odd$.subscribe((res) => console.log(res));
  }
    
  
}
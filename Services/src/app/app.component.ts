import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { interval, timer} from "rxjs";
import { EMPTY } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const obs$ = of(1, 2, 3, 4, 5);
    const newObs$ = obs$.pipe(
      map(num => num*2)
    );

    newObs$.subscribe((val) => console.log('New Observable: ${val}'));
    
  }
}
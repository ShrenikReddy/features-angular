import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { interval, timer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const timerObs$ = timer(2000,1000);
    timerObs$.subscribe((val) => console.log('Value: ${val}'));
  }
}
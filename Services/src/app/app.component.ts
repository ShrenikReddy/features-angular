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
    const src1 = of(1,2,3);
    const src2 = EMPTY;

    src1.subscribe({
      next: (value) => console.log('Source 1 Next:', value),
      complete: () => console.log('Source 1 Complete'),
    });
     
    src2.subscribe({
      next: (value) => console.log('Source 2 Next:', value),
      complete: () => console.log('Source 2 Complete'),
  }
}
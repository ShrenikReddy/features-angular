import { CommonModule } from "@angular/common";
import { Component, numberAttribute, OnInit } from "@angular/core";
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
  cursorPosition$: Observable<{ x: number; y: number }>;

  ngOnInit(): void {
    this.cursorPosition$ = fromEvent<MouseEvent>(window,'mousemove');
    .pipe(
      map(e => ({x: e.clientX, y: e.clientY}))
    );
  }

}
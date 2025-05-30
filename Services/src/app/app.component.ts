import { CommonModule } from "@angular/common";
import { Component, numberAttribute, OnInit } from "@angular/core";
import { mergeMap, Observable, of } from "rxjs";
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
  outerObservable$ = from([1,2,3,4,5]);
  innerObservable$ = from(value: number) => of(value * 2);

  flattenObservable$ = this.outerObservable$.pipe(
    mergeMap(this.innerObservable$)
  );

  ngOnInit(): void {
    this.flattenObservable$.subscribe((res) => console.log(res));
  }

}
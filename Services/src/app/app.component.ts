import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { interval } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const obs$ = interval(1000);
    obs$.subscribe(val => console.log(val));

    setTimeout(() => {
      console.log('Unsubscribed...');
      obsSubscribe.unsubscribe();
    }, 5000);
}
}
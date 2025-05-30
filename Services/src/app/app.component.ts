import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const m = new Map();
    m.set(1,'Hello');
    m.set(2,'Converting to observable');

    const mapObs = from(m);
    mapObs.subscribe((val) => console.log(val));
}
}
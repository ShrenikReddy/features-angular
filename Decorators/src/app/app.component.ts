import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { JsonPipe } from '@angular/common';
import { HighlightElementDirective } from './highlight-element.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, HighlightElementDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    employees = [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 },
      { name: 'Bob', age: 35 },
      { name: 'Alice', age: 20 },

];
}

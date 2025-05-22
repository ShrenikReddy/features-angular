import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { JsonPipe } from '@angular/common';
import { HighlightElementDirective } from './highlight-element.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, HighlightElementDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  weightInPounds: number = 0;
  weightInKilograms: number =0;

  convertWeight(){
    this.weightInKilograms = this.weightInPounds * 0.453592;
  }

}

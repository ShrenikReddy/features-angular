import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { HighlightElementDirective } from './highlight-element.directive';
import { SortNumbersPipe } from './sort-numbers.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent,CommonModule, SortNumbersPipe, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}

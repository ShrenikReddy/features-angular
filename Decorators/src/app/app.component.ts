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
  showJson: boolean = false;
  students= [ 
    {name:'user a',age:21, gender:'female', major: 'computer science'},
    {name:'user b',age:22, gender:'male', major: 'math'},
    {name:'user c',age:23, gender:'female', major: 'english'},
    {name:'user d',age:24, gender:'male', major: 'history'},
  ]
toggleJson(){
  this.showJson = !this.showJson;
}
}

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
  products: { name: string; imageUrl: string } = [
    {
      name: 'fullstack',
      imageUrl: 'assets/Bun.jpg ',
    },
    {
      name: 'front-end',
      imageUrl: 'assets/FullStack.jpg',
    },
    {
      name: 'back-end',
      imageUrl: 'assets/FullStack.jpg',
    },
    {
      name: 'NestJS',
      imageUrl: 'assets/NestJS.jpg',
    };
  ];

  pgSize: number = 4;
  startIndex: number = 0;
  endIndex: number = this.pgSize;

  previousPage(){
    this.startIndex -= this.pgSize;
    this.endIndex -= this.pgSize;
  }

  nextPage(){
    this.startIndex += this.pgSize;
    this.endIndex += this.pgSize;
  }
}
